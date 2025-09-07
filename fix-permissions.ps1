# Quick Fix for Capacitor Sync Permission Issues
# Run as Administrator

Write-Host "🔧 PrimeFit Studio - Permission Fix Script" -ForegroundColor Green

# Navigate to project
Set-Location "c:\Users\SG0706304\OneDrive - Sabre\Desktop\Rafi\codebase\project"

# Take ownership of android folder
Write-Host "📁 Taking ownership of Android folder..." -ForegroundColor Yellow
takeown /f android /r /d y

# Grant full permissions
Write-Host "🔑 Granting full permissions..." -ForegroundColor Yellow
icacls android /grant "$env:USERNAME:(OI)(CI)F" /t

# Remove problematic folders manually
Write-Host "🗑️ Cleaning problematic directories..." -ForegroundColor Yellow

$foldersToClean = @(
    "android\app\src\main\assets\public",
    "android\app\src\main\assets\capacitor.plugins.json",
    "android\app\capacitor.build.gradle"
)

foreach ($folder in $foldersToClean) {
    if (Test-Path $folder) {
        try {
            Remove-Item -Path $folder -Recurse -Force
            Write-Host "   ✅ Removed: $folder" -ForegroundColor Green
        } catch {
            Write-Host "   ⚠️ Could not remove: $folder" -ForegroundColor Yellow
        }
    }
}

Write-Host "`n🔄 Trying Capacitor sync again..." -ForegroundColor Yellow
npx cap sync android

Write-Host "`n✅ Permission fix completed!" -ForegroundColor Green
