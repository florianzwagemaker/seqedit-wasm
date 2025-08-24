use wasm_bindgen::prelude::*;
use serde::{Serialize};
use std::collections::HashMap;

#[derive(Serialize)]
pub struct Sequence {
    pub id: String,
    pub residues: String,
}

#[wasm_bindgen]
#[derive(Debug, Clone, Copy, PartialEq, Eq, Serialize)]
pub enum AminoAcid {
    Ala, Arg, Asn, Asp, Cys, Gln, Glu, Gly, His, Ile, Leu, Lys, Met, Phe, Pro, Ser, Thr, Trp, Tyr, Val, Stop, Unknown
}

impl ToString for AminoAcid {
    fn to_string(&self) -> String {
        match self {
            AminoAcid::Ala => "A".to_string(),
            AminoAcid::Arg => "R".to_string(),
            AminoAcid::Asn => "N".to_string(),
            AminoAcid::Asp => "D".to_string(),
            AminoAcid::Cys => "C".to_string(),
            AminoAcid::Gln => "Q".to_string(),
            AminoAcid::Glu => "E".to_string(),
            AminoAcid::Gly => "G".to_string(),
            AminoAcid::His => "H".to_string(),
            AminoAcid::Ile => "I".to_string(),
            AminoAcid::Leu => "L".to_string(),
            AminoAcid::Lys => "K".to_string(),
            AminoAcid::Met => "M".to_string(),
            AminoAcid::Phe => "F".to_string(),
            AminoAcid::Pro => "P".to_string(),
            AminoAcid::Ser => "S".to_string(),
            AminoAcid::Thr => "T".to_string(),
            AminoAcid::Trp => "W".to_string(),
            AminoAcid::Tyr => "Y".to_string(),
            AminoAcid::Val => "V".to_string(),
            AminoAcid::Stop => "*".to_string(),
            AminoAcid::Unknown => "X".to_string(),
        }
    }
}

lazy_static::lazy_static! {
    static ref GENETIC_CODE: HashMap<&'static str, AminoAcid> = {
        let mut m = HashMap::new();
        m.insert("TTT", AminoAcid::Phe); m.insert("TTC", AminoAcid::Phe);
        m.insert("TTA", AminoAcid::Leu); m.insert("TTG", AminoAcid::Leu);
        m.insert("CTT", AminoAcid::Leu); m.insert("CTC", AminoAcid::Leu);
        m.insert("CTA", AminoAcid::Leu); m.insert("CTG", AminoAcid::Leu);
        m.insert("ATT", AminoAcid::Ile); m.insert("ATC", AminoAcid::Ile);
        m.insert("ATA", AminoAcid::Ile); m.insert("ATG", AminoAcid::Met);
        m.insert("GTT", AminoAcid::Val); m.insert("GTC", AminoAcid::Val);
        m.insert("GTA", AminoAcid::Val); m.insert("GTG", AminoAcid::Val);
        m.insert("TCT", AminoAcid::Ser); m.insert("TCC", AminoAcid::Ser);
        m.insert("TCA", AminoAcid::Ser); m.insert("TCG", AminoAcid::Ser);
        m.insert("CCT", AminoAcid::Pro); m.insert("CCC", AminoAcid::Pro);
        m.insert("CCA", AminoAcid::Pro); m.insert("CCG", AminoAcid::Pro);
        m.insert("ACT", AminoAcid::Thr); m.insert("ACC", AminoAcid::Thr);
        m.insert("ACA", AminoAcid::Thr); m.insert("ACG", AminoAcid::Thr);
        m.insert("GCT", AminoAcid::Ala); m.insert("GCC", AminoAcid::Ala);
        m.insert("GCA", AminoAcid::Ala); m.insert("GCG", AminoAcid::Ala);
        m.insert("TAT", AminoAcid::Tyr); m.insert("TAC", AminoAcid::Tyr);
        m.insert("TAA", AminoAcid::Stop); m.insert("TAG", AminoAcid::Stop);
        m.insert("CAT", AminoAcid::His); m.insert("CAC", AminoAcid::His);
        m.insert("CAA", AminoAcid::Gln); m.insert("CAG", AminoAcid::Gln);
        m.insert("AAT", AminoAcid::Asn); m.insert("AAC", AminoAcid::Asn);
        m.insert("AAA", AminoAcid::Lys); m.insert("AAG", AminoAcid::Lys);
        m.insert("GAT", AminoAcid::Asp); m.insert("GAC", AminoAcid::Asp);
        m.insert("GAA", AminoAcid::Glu); m.insert("GAG", AminoAcid::Glu);
        m.insert("TGT", AminoAcid::Cys); m.insert("TGC", AminoAcid::Cys);
        m.insert("TGA", AminoAcid::Stop); m.insert("TGG", AminoAcid::Trp);
        m.insert("CGT", AminoAcid::Arg); m.insert("CGC", AminoAcid::Arg);
        m.insert("CGA", AminoAcid::Arg); m.insert("CGG", AminoAcid::Arg);
        m.insert("AGT", AminoAcid::Ser); m.insert("AGC", AminoAcid::Ser);
        m.insert("AGA", AminoAcid::Arg); m.insert("AGG", AminoAcid::Arg);
        m.insert("GGT", AminoAcid::Gly); m.insert("GGC", AminoAcid::Gly);
        m.insert("GGA", AminoAcid::Gly); m.insert("GGG", AminoAcid::Gly);
        m
    };
}

#[wasm_bindgen]
pub fn search(sequence: &str, query: &str) -> Vec<usize> {
    sequence.match_indices(query).map(|(i, _)| i).collect()
}

#[wasm_bindgen]
pub fn translate(sequence: &str, frame: usize) -> String {
    let mut amino_acids = String::new();
    let start_index = frame - 1; // Adjust for 0-based indexing

    if start_index >= sequence.len() {
        return "".to_string();
    }

    for i in (start_index..sequence.len()).step_by(3) {
        if i + 2 < sequence.len() {
            let codon_string = sequence[i..i+3].to_uppercase();
            let codon: &str = &codon_string;
            let amino_acid = GENETIC_CODE.get(codon).unwrap_or(&AminoAcid::Unknown);
            amino_acids.push_str(&amino_acid.to_string());
        } else {
            // Handle partial codons at the end
            amino_acids.push_str("X");
        }
    }
    amino_acids
}

#[wasm_bindgen]
pub fn parse_fasta(data: &str) -> Result<JsValue, JsValue> {
    let mut sequences = Vec::new();
    let mut current_id = String::new();
    let mut current_sequence = String::new();

    for line in data.lines() {
        if line.starts_with('>') {
            if !current_id.is_empty() {
                sequences.push(Sequence { id: current_id.clone(), residues: current_sequence.clone() });
            }
            current_id = line[1..].to_string();
            current_sequence.clear();
        } else {
            current_sequence.push_str(line.trim());
        }
    }

    if !current_id.is_empty() {
        sequences.push(Sequence { id: current_id, residues: current_sequence });
    }

    Ok(serde_wasm_bindgen::to_value(&sequences)?)
}

#[wasm_bindgen]
pub fn reverse_complement(sequence: &str) -> String {
    sequence
        .chars()
        .rev()
        .map(|c| match c {
            'A' => 'T',
            'T' => 'A',
            'C' => 'G',
            'G' => 'C',
            'U' => 'A',
            'a' => 't',
            't' => 'a',
            'c' => 'g',
            'g' => 'c',
            'u' => 'a',
            _ => c,
        })
        .collect()
}
