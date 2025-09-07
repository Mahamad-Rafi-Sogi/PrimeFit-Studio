# PrimeFit Studio - Build Script for Play Store
# Run this script as Administrator in PowerShell

Write-Host "🏋️ PrimeFit Studio - Play Store Build Script" -ForegroundColor Green
Write-Host "=============================================" -ForegroundColor Green

# Check if running as administrator
$isAdmin = ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")

if (-not $isAdmin) {
    Write-Host "❌ This script must be run as Administrator!" -ForegroundColor Red
    Write-Host "   Right-click PowerShell and select 'Run as Administrator'" -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host "✅ Running as Administrator" -ForegroundColor Green

# Set location to project directory
$projectPath = "c:\Users\SG0706304\OneDrive - Sabre\Desktop\Rafi\codebase\project"
Set-Location $projectPath

Write-Host "📂 Project Location: $projectPath" -ForegroundColor Cyan

# Function to handle errors
function Handle-Error {
    param($ErrorMessage)
    Write-Host "❌ Error: $ErrorMessage" -ForegroundColor Red
    Read-Host "Press Enter to continue or Ctrl+C to exit"
}

# Step 1: Clean previous builds
Write-Host "`n🧹 Cleaning previous builds..." -ForegroundColor Yellow
try {
    if (Test-Path "dist") {
        Remove-Item -Recurse -Force "dist"
        Write-Host "   ✅ Cleaned dist folder" -ForegroundColor Green
    }
    
    if (Test-Path "android\app\src\main\assets\public") {
        Remove-Item -Recurse -Force "android\app\src\main\assets\public"
        Write-Host "   ✅ Cleaned Android assets" -ForegroundColor Green
    }
} catch {
    Handle-Error "Failed to clean directories: $($_.Exception.Message)"
}

# Step 2: Install dependencies
Write-Host "`n📦 Installing dependencies..." -ForegroundColor Yellow
try {
    npm install
    Write-Host "   ✅ Dependencies installed" -ForegroundColor Green
} catch {
    Handle-Error "Failed to install dependencies: $($_.Exception.Message)"
}

# Step 3: Build production app
Write-Host "`n🔨 Building production app..." -ForegroundColor Yellow
try {
    npm run build
    Write-Host "   ✅ Production build completed" -ForegroundColor Green
} catch {
    Handle-Error "Failed to build app: $($_.Exception.Message)"
}

# Step 4: Sync with Capacitor
Write-Host "`n🔄 Syncing with Capacitor Android..." -ForegroundColor Yellow
try {
    npx cap sync android
    Write-Host "   ✅ Capacitor sync completed" -ForegroundColor Green
} catch {
    Handle-Error "Failed to sync with Capacitor: $($_.Exception.Message)"
}

# Step 5: Verify Android project
Write-Host "`n🔍 Verifying Android project..." -ForegroundColor Yellow
$androidPath = "android\app\src\main"
if (Test-Path $androidPath) {
    Write-Host "   ✅ Android project structure exists" -ForegroundColor Green
    
    # Check for key files
    $keyFiles = @(
        "android\app\build.gradle",
        "android\app\src\main\AndroidManifest.xml",
        "android\app\src\main\assets\capacitor.config.json"
    )
    
    foreach ($file in $keyFiles) {
        if (Test-Path $file) {
            Write-Host "   ✅ Found: $file" -ForegroundColor Green
        } else {
            Write-Host "   ⚠️  Missing: $file" -ForegroundColor Yellow
        }
    }
} else {
    Write-Host "   ❌ Android project not found" -ForegroundColor Red
}

# Step 6: Generate app information
Write-Host "`n📋 App Information Summary:" -ForegroundColor Cyan
Write-Host "   App Name: PrimeFit Studio" -ForegroundColor White
Write-Host "   Package ID: com.primefitstudio.app" -ForegroundColor White
Write-Host "   Version: 1.0.0" -ForegroundColor White
Write-Host "   Min SDK: 22 (Android 5.1)" -ForegroundColor White
Write-Host "   Target SDK: 34 (Android 14)" -ForegroundColor White

# Step 7: Next steps instructions
Write-Host "`n🚀 Next Steps:" -ForegroundColor Green
Write-Host "   1. Open Android Studio: npx cap open android" -ForegroundColor White
Write-Host "   2. Generate signed APK/AAB for Play Store" -ForegroundColor White
Write-Host "   3. Follow the PLAYSTORE_PREPARATION.md guide" -ForegroundColor White

# Step 8: Open Android Studio option
Write-Host "`n❓ Would you like to open Android Studio now? (y/n): " -ForegroundColor Yellow -NoNewline
$openStudio = Read-Host

if ($openStudio -eq "y" -or $openStudio -eq "Y") {
    Write-Host "🚀 Opening Android Studio..." -ForegroundColor Green
    try {
        npx cap open android
    } catch {
        Handle-Error "Failed to open Android Studio: $($_.Exception.Message)"
        Write-Host "   Try running manually: npx cap open android" -ForegroundColor Yellow
    }
}

Write-Host "`n✅ Build script completed!" -ForegroundColor Green
Write-Host "📖 Check PLAYSTORE_PREPARATION.md for detailed next steps" -ForegroundColor Cyan
Read-Host "Press Enter to exit"
