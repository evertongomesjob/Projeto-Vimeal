<#
  Baixa PNGs para public/logos/{id}.png
  - 1) Clearbit Logo API (logo.clearbit.com) — quando existe
  - 2) Google favicon API (s2/favicons) — ícone do domínio em tamanho maior

  Nota: "Google Imagens" não tem API pública para automatizar downloads; estes
  serviços devolvem o logo/favicon oficial associado ao domínio da empresa.
#>
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$outDir = Join-Path $root "public\logos"
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

# id -> domínio principal da marca (ajuste se necessário)
$map = [ordered]@{
  itau          = "itau.com.br"
  bradesco      = "bradesco.com.br"
  bvFinanceira  = "bv.com.br"
  portoSeguro   = "portoseguro.com.br"
  cip           = "cip.org.br"
  einstein      = "einstein.br"
  uhc           = "unitedhealthgroup.com"
  zurich        = "zurich.com.br"
  intel         = "intel.com"
  arbit         = "arbit.com.br"
  interfile     = "interfile.com.br"
  niteo         = "niteo.com.br"
  clarusIt      = "clarus.com.br"
  entrustIt     = "entrust.com"
  extractta     = "extractta.com.br"
  act           = "act.com.br"
  fuseIt        = "fuseit.com.br"
  reply         = "reply.com"
  pwc           = "pwc.com.br"
  sascar        = "sascar.com.br"
  michelin      = "michelin.com.br"
  tensar        = "tensar.com"
}

function Save-FromUrl {
  param([string]$Url, [string]$Dest)
  try {
    Invoke-WebRequest -Uri $Url -OutFile $Dest -UseBasicParsing
    if (-not (Test-Path $Dest)) { return $false }
    if ((Get-Item $Dest).Length -lt 80) { Remove-Item $Dest -Force; return $false }
    return $true
  } catch {
    if (Test-Path $Dest) { Remove-Item $Dest -Force -ErrorAction SilentlyContinue }
    return $false
  }
}

foreach ($kv in $map.GetEnumerator()) {
  $id = $kv.Key
  $domain = $kv.Value
  $dest = Join-Path $outDir "$id.png"
  $clearbit = "https://logo.clearbit.com/$domain"
  $gFavicon = "https://www.google.com/s2/favicons?domain=$domain&sz=128"

  Write-Host "[$id] $domain ..." -NoNewline
  $ok = $false
  try {
    $ok = Save-FromUrl -Url $clearbit -Dest $dest
  } catch { }
  if (-not $ok) {
    try {
      $ok = Save-FromUrl -Url $gFavicon -Dest $dest
    } catch { }
  }
  if ($ok) { Write-Host " OK" -ForegroundColor Green }
  else { Write-Host " falhou" -ForegroundColor Yellow }
}

Write-Host "`nFicheiros em: $outDir"
