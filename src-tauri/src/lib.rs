// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
use serde::Deserialize;


#[derive(Deserialize, serde::Serialize)]
struct Chord {
    symbol: String,
    fullname: String,
    chord_type: String,
    annotation: Vec<i32>,
    small_annotation: Vec<i32>,
    index: Vec<i32>,
    small_index: Vec<i32>,
}

#[tauri::command]
fn get_chords() -> Result<Vec<Chord>, String> {

    let json = include_str!("../assets/allchords.json");

    let chords = serde_json::from_str(json)
        .map_err(|e| e.to_string())?;

    Ok(chords)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_sql::Builder::new().build())
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![get_chords])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
