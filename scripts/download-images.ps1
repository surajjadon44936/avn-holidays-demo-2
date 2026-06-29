$ErrorActionPreference = "Continue"
$dest = Join-Path $PSScriptRoot "..\public\images"
New-Item -ItemType Directory -Force -Path $dest | Out-Null

$images = @{
  "hero-kerala-backwaters.jpg" = "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1920"
  "kerala-backwaters.jpg" = "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1600"
  "munnar-tea-hills.jpg" = "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=1600"
  "kabini-wildlife.jpg" = "https://images.pexels.com/photos/1441974231530-c6227db76b6e/pexels-photo-1441974231530-c6227db76b6e.jpeg?auto=compress&cs=tinysrgb&w=1600"
  "gangtok-mountains.jpg" = "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1600"
  "andaman-beach.jpg" = "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=1600"
  "mysore-palace.jpg" = "https://images.pexels.com/photos/358136/pexels-photo-358136.jpeg?auto=compress&cs=tinysrgb&w=1600"
  "coorg-coffee-hills.jpg" = "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=1600"
  "ooty-nilgiris.jpg" = "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=1600&crop=entropy"
  "thekkady-periyar.jpg" = "https://images.pexels.com/photos/1441974231530-c6227db76b6e/pexels-photo-1441974231530-c6227db76b6e.jpeg?auto=compress&cs=tinysrgb&w=1600&crop=entropy"
  "pelling-kanchenjunga.jpg" = "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1600&crop=entropy"
  "darjeeling-tea-garden.jpg" = "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=1600&crop=top"
  "pondicherry-french-quarter.jpg" = "https://images.pexels.com/photos/358136/pexels-photo-358136.jpeg?auto=compress&cs=tinysrgb&w=1600&crop=entropy"
  "bangalore-skyline.jpg" = "https://images.pexels.com/photos/358136/pexels-photo-358136.jpeg?auto=compress&cs=tinysrgb&w=1600&crop=top"
  "kovalam-beach.jpg" = "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=1600&crop=entropy"
  "wayanad-forest.jpg" = "https://images.pexels.com/photos/1441974231530-c6227db76b6e/pexels-photo-1441974231530-c6227db76b6e.jpeg?auto=compress&cs=tinysrgb&w=1600&crop=top"
  "chikmagalur-coffee.jpg" = "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=1600&crop=entropy"
  "port-blair-andaman.jpg" = "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=1600&crop=top"
  "mysore-team-concierge.jpg" = "https://images.pexels.com/photos/736831/pexels-photo-736831.jpeg?auto=compress&cs=tinysrgb&w=1200"
  "concierge-planning.jpg" = "https://images.pexels.com/photos/736831/pexels-photo-736831.jpeg?auto=compress&cs=tinysrgb&w=1200&crop=entropy"
  "car-rental-india.jpg" = "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1600"
  "stay-hill-resort-placeholder.jpg" = "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=1200"
  "stay-beach-resort-placeholder.jpg" = "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=1200"
  "stay-heritage-hotel-placeholder.jpg" = "https://images.pexels.com/photos/358136/pexels-photo-358136.jpeg?auto=compress&cs=tinysrgb&w=1200"
  "stay-wildlife-lodge-placeholder.jpg" = "https://images.pexels.com/photos/1441974231530-c6227db76b6e/pexels-photo-1441974231530-c6227db76b6e.jpeg?auto=compress&cs=tinysrgb&w=1200"
  "stay-backwater-resort-placeholder.jpg" = "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1200"
}

$ok = 0
foreach ($entry in $images.GetEnumerator()) {
  $out = Join-Path $dest $entry.Key
  try {
    Write-Host "Downloading $($entry.Key)..."
    Invoke-WebRequest -Uri $entry.Value -OutFile $out -UseBasicParsing
    $ok++
  } catch {
    Write-Warning "Failed: $($entry.Key) - $_"
  }
}

Write-Host "Done. $ok/$($images.Count) images saved to $dest"
