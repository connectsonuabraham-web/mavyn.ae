Get-ChildItem -Path src -Recurse -Include *.tsx,*.ts | ForEach-Object {
  $c = [System.IO.File]::ReadAllText($_.FullName)
  # Replace em-dash with period or comma depending on context
  $c = $c -replace ' — ', '. '
  $c = $c -replace '— ', '. '
  $c = $c -replace ' —', '.'
  $c = $c -replace '—', '. '
  [System.IO.File]::WriteAllText($_.FullName, $c)
}
