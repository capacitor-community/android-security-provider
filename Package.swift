// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapacitorCommunitySecurityProvider",
    platforms: [.iOS(.v14)],
    products: [
        .library(
            name: "CapacitorCommunitySecurityProvider",
            targets: ["CapacitorSecurityProviderPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "7.0.0")
    ],
    targets: [
        .target(
            name: "CapacitorSecurityProviderPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/CapacitorSecurityProviderPlugin"),
        .testTarget(
            name: "CapacitorSecurityProviderPluginTests",
            dependencies: ["CapacitorSecurityProviderPlugin"],
            path: "ios/Tests/CapacitorSecurityProviderPluginTests")
    ]
)
