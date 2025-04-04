/**
 * @GeneratedBy SpaceBuildings.js runner
 * @OriginalFile raw/spacebuildings.csv
 */

export default {
    Shipyard: {
        Name: "Shipyard",
        AllowBuildOnYS: 1,
        MoveHydrogenCostPerSector: 100,
        TID: "TID_BUILDING_SHIPYARD",
        TID_Description: "TID_BUILDING_SHIPYARD_DESCR",
        TID_INFO_SCREEN: "TID_BUILDING_SHIPYARD_DESCR",
        TID_UPGRADE: "TID_BLD_SHIPYARD_UPGRADE",
        TID_CUSTOM_TUT_SELECT: "TID_TUT_SELECT_SHIPYARD",
        ConceptImage: "portrait_shipyard",
        PrefabModel: "station_Shipyard",
        PrefabModel_BuildMenu: "station_Shipyard_ui",
        RequiredPlanetLevel: 1,
        UISortOrder: 10,
        Cost: [800, 4000, 10000, 20000, 80000, 200000, 500000, 1000000, 2000000, 5000000],
        RequiresEmptySector: 0,
        MaxOnOwnSolarSystem: 1,
        MaxPerSector: 1,
        ShipyardCapacity: [4, 5, 7, 8, 10, 12, 13, 14, 15, 16],
        BuildNotifMode: 0,
        ShowInStarLinks: 1,
        ConstructionTime: [5, 60, 1800, 28800, 86400, 172800, 259200, 345600, 432000, 432000],
    },
    ShortRangeScanner: {
        Name: "ShortRangeScanner",
        AllowBuildOnYS: 1,
        CanCancelBuild: 1,
        CancelBuildRefundPct: 90,
        SeparateBuildingPerLevel: 1,
        AllowAdditionalBuildingsAtMaxLevel: 1,
        MoveHydrogenCostPerSector: 50,
        AllowMoveInSameSectorOnly: 1,
        TID: "TID_BUILDING_SHORT_RANGE_SCANNER",
        TID_Description: "TID_BUILDING_SHORT_RANGE_SCANNER_DESCR",
        TID_INFO_SCREEN: "TID_BUILDING_SHORT_RANGE_SCANNER_INFO",
        ConceptImage: "portrait_SpaceBuilding",
        PrefabModel: "station_ShortRangeScanner",
        PrefabModel_BuildMenu: "station_ShortRangeScanner_ui",
        PrefabModel_WithStarHarvester: "station_HydroScanner",
        RequiredPlanetLevel: 3,
        UISortOrder: 30,
        Cost: [500, 2000, 20000, 40000, 80000, 150000, 300000, 600000, 1000000, 2000000, 3000000, 4000000],
        SectorUnlockCost: [1500, 2000, 20000, 40000, 80000, 150000, 300000, 600000, 1000000, 2000000, 3000000, 4000000],
        SectorUnlockTime: [60, 3600, 86400, 129600, 172800, 259200, 345600, 432000, 518400, 604800, 604800, 604800],
        RequiresEmptySector: 0,
        MaxPerSector: 1,
        CanScanSectors: 1,
        BuildNotifMode: 2,
        ConstructionTime: [60, 600, 43200, 86400, 86400, 86400, 86400, 86400, 86400, 86400, 86400, 86400],
    },
    RedStarScanner: {
        Name: "RedStarScanner",
        AllowBuildOnYS: 1,
        MoveHydrogenCostPerSector: 25,
        TID: "TID_BUILDING_REDSTAR_SCANNER",
        TID_Description: "TID_BUILDING_REDSTAR_SCANNER_DESCR",
        TID_INFO_SCREEN: "TID_BUILDING_REDSTAR_SCANNER_INFO",
        TID_UPGRADE: "TID_BLD_REDSTAR_UPGRADE",
        TID_CUSTOM_TUT_SELECT: "TID_TUT_SELECT_MISSION_BUILDING",
        ConceptImage: "portrait_JumpGate",
        PrefabModel: "station_RedStarScanner",
        PrefabModel_BuildMenu: "station_RedStarScanner_ui",
        RequiredPlanetLevel: 4,
        UISortOrder: 40,
        Cost: [1000, 5000, 20000, 60000, 100000, 200000, 600000, 2000000, 4000000, 8000000, 17000000, 32000000],
        RequiresEmptySector: 0,
        MaxOnOwnSolarSystem: 1,
        MaxPerSector: 1,
        StarScannerType: 0,
        StargateModel: "JumpGate",
        BuildNotifMode: 1,
        ShowInStarLinks: 1,
        ConstructionTime: [3, 60, 1800, 86400, 172800, 259200, 345600, 432000, 518400, 604800, 864000, 864000],
    },
    ResearchStation: {
        Name: "ResearchStation",
        AllowBuildOnYS: 1,
        MoveHydrogenCostPerSector: 25,
        TID: "TID_BUILDING_RESEARCH",
        TID_Description: "TID_BUILDING_RESEARCH_DESCR",
        TID_INFO_SCREEN: "TID_BUILDING_RESEARCH_INFO",
        TID_UPGRADE: "TID_BLD_RESEARCH_STATION_UPGRADE",
        TID_CUSTOM_TUT_SELECT: "TID_TUT_SELECT_RESEARCH_STATION",
        ConceptImage: "portrait_SpaceBuilding",
        PrefabModel: "station_Research",
        PrefabModel_BuildMenu: "station_Research_ui",
        RequiredPlanetLevel: 5,
        UISortOrder: 50,
        Cost: 1000,
        ResearchSlots: 8,
        RequiresEmptySector: 0,
        MaxOnOwnSolarSystem: 1,
        MaxPerSector: 1,
        BuildNotifMode: 1,
        ShowInStarLinks: 1,
        ConstructionTime: 5,
    },
    DiplomacyCenter: {
        Name: "DiplomacyCenter",
        AllowBuildOnYS: 1,
        SeparateBuildingPerLevel: 1,
        MoveHydrogenCostPerSector: 1000,
        TID: "TID_BUILDING_DIPLOMACY_CENTER",
        TID_Description: "TID_BUILDING_DIPLOMACY_CENTER_DESCR",
        TID_INFO_SCREEN: "TID_BUILDING_DIPLOMACY_CENTER_INFO",
        ConceptImage: "portrait_SpaceBuilding",
        PrefabModel: "station_Diplomacy",
        PrefabModel_BuildMenu: "station_Diplomacy_ui",
        RequiredPlanetLevel: 7,
        UISortOrder: 120,
        Cost: [25000, 500000, 4000000],
        RequiresEmptySector: 0,
        MaxOnOwnSolarSystem: 3,
        MaxPerSector: 1,
        StargateModel: "JumpGate",
        BuildNotifMode: 3,
        ShowInStarLinks: 1,
        ConstructionTime: [28800, 432000, 864000],
    },
    TradingStation: {
        Name: "TradingStation",
        AllowBuildOnYS: 1,
        CanBeRenamed: 1,
        MoveHydrogenCostPerSector: 500,
        TID: "TID_BUILDING_TRADINGSTATION",
        TID_Description: "TID_BUILDING_TRADINGSTATION_DESCR",
        TID_INFO_SCREEN: "TID_BUILDING_TRADINGSTATION_DESCR",
        ConceptImage: "portrait_SpaceBuilding",
        PrefabModel: "station_trade",
        PrefabModel_BuildMenu: "station_trade_ui",
        RequiredPlanetLevel: 13,
        UISortOrder: 140,
        Cost: [2000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000],
        TotalShipmentCRPerDay: [1500, 3000, 4500, 6000, 8000, 10000, 12000, 15000, 18000, 25000],
        MaxShipments: [15, 20, 25, 30, 35, 40, 50, 60, 70, 80],
        RequiresEmptySector: 1,
        CenterPlacement: 1,
        RequiresSectorDistance: 1,
        MaxOnOwnSolarSystem: 3,
        MaxPerSector: 1,
        BuildNotifMode: 1,
        ShowInStarLinks: 1,
        RSLevelReq: [null, 5, 6, 7, 7, 8, 8, 9, 9, 10],
        ConstructionTime: [86400, 172800, 345600, 432000, 518400, 604800, 691200, 777600, 864000, 950400],
    },
    WarpLaneHub: {
        Name: "WarpLaneHub",
        AllowBuildOnYS: 1,
        SeparateBuildingPerLevel: 1,
        AllowAdditionalBuildingsAtMaxLevel: 1,
        BuyInPairs: 1,
        MoveHydrogenCostPerSector: 50,
        TID: "TID_BUILDING_WARPLANE_HUB",
        TID_Description: "TID_BUILDING_WARPLANE_HUB_DESCR",
        TID_INFO_SCREEN: "TID_BUILDING_WARPLANE_HUB_INFO",
        ConceptImage: "portrait_WarpLane",
        PrefabModel: "warpLaneHub",
        PrefabModel_BuildMenu: "warpLaneHub_ui",
        RequiredPlanetLevel: 12,
        UISortOrder: 130,
        Cost: [
            10000, 10000, 15000, 15000, 20000, 20000, 25000, 25000, 50000, 50000, 100000, 100000, 200000, 200000,
            300000, 300000, 400000, 400000, 500000, 500000, 600000, 600000,
        ],
        RSLevelReq: [5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 10, 10],
        RequiresEmptySector: 0,
        MaxOnOwnSolarSystem: 24,
        MaxPerSector: 8,
        IsWarpLane: 1,
        OverrideMinAsteroidDistSquared: 1000000,
        BuildNotifMode: 1,
        ConstructionTime: [
            43200, 43200, 86400, 86400, 172800, 172800, 259200, 259200, 345600, 345600, 432000, 432000, 518400, 518400,
            604800, 604800, 691200, 691200, 777600, 777600, 864000, 864000,
        ],
    },
    Stargate: {
        Name: "Stargate",
        AllowBuildOnYS: 0,
        TID: "TID_BUILDING_STARGATE",
        TID_Description: "TID_BUILDING_STARGATE_DESCR",
        TID_INFO_SCREEN: "TID_BUILDING_STARGATE_DESCR",
        ConceptImage: "portrait_JumpGate",
        IsStargate: 1,
        RequiresEmptySector: 0,
        OverrideMinAsteroidDistSquared: 1000000,
        StargateModel: "JumpGate02",
    },
    OrangeStarScanner: {
        Name: "OrangeStarScanner",
        AllowBuildOnYS: 0,
        MoveHydrogenCostPerSector: 1000,
        TID: "TID_BUILDING_ORANGESTAR_SCANNER",
        TID_Description: "TID_BUILDING_ORANGESTAR_SCANNER_DESCR",
        TID_INFO_SCREEN: "TID_BUILDING_ORANGESTAR_SCANNER_INFO",
        ConceptImage: "portrait_JumpGate",
        Model: "redStarScanner",
        RequiredPlanetLevel: 5,
        UISortOrder: 50,
        Cost: 40000,
        RequiresEmptySector: 1,
        MaxOnOwnSolarSystem: 1,
        MaxPerSector: 1,
        StarScannerType: 1,
        StargateModel: "JumpGate",
        ConstructionTime: 86400,
    },
    WhiteStarScanner: {
        Name: "WhiteStarScanner",
        AllowBuildOnYS: 1,
        MoveHydrogenCostPerSector: 100,
        TID: "TID_BLD_WHITESTAR_SCANNER",
        TID_Description: "TID_BLD_WHITESTAR_SCANNER_DESCR",
        TID_INFO_SCREEN: "TID_BLD_WHITESTAR_SCANNER_DESCR",
        TID_UPGRADE: "TID_BLD_REDSTAR_UPGRADE",
        ConceptImage: "portrait_JumpGate",
        PrefabModel: "station_WhiteStarScanner",
        PrefabModel_BuildMenu: "station_WhiteStarScanner_ui",
        RequiredPlanetLevel: 10,
        UISortOrder: 92,
        Cost: 25000,
        RequiresEmptySector: 1,
        MaxOnOwnSolarSystem: 1,
        MaxPerSector: 1,
        StargateModel: "JumpGateWhiteStar",
        BuildNotifMode: 1,
        ShowInStarLinks: 1,
        ConstructionTime: 1,
    },
    TimeModulator: {
        Name: "TimeModulator",
        AllowBuildOnYS: 0,
        MoveHydrogenCostPerSector: 1000,
        AllowMoveInSameSectorOnly: 1,
        TID: "TID_BLD_STAR_HARVESTER",
        TID_Description: "TID_BLD_STAR_HARVESTER_BUILD_DESCR",
        TID_INFO_SCREEN: "TID_BLD_STAR_HARVESTER_DESCR",
        ConceptImage: "portrait_SpaceBuilding",
        PrefabModel: "timeModulator",
        PrefabModel_BuildMenu: "timeModulator_ui",
        RequiredPlanetLevel: 6,
        UISortOrder: 71,
        Cost: [
            1000, 4000, 10000, 30000, 100000, 200000, 400000, 600000, 800000, 1000000, 2000000, 3000000, 4000000,
            5000000, 6000000, 7000000,
        ],
        RequiresStarSector: 1,
        MaxOnOwnSolarSystem: 1,
        MaxPerSector: 1,
        BuildNotifMode: 1,
        ShowInStarLinks: 1,
        ConstructionTime: [
            5, 3600, 28800, 172800, 345600, 432000, 518400, 604800, 691200, 777600, 864000, 864000, 864000, 864000,
            864000, 864000,
        ],
    },
    BlueStarScanner: {
        Name: "BlueStarScanner",
        AllowBuildOnYS: 1,
        MoveHydrogenCostPerSector: 100,
        TID: "TID_BUILDING_BLUESTAR_SCANNER",
        TID_Description: "TID_BUILDING_BLUESTAR_SCANNER_DESCR",
        TID_INFO_SCREEN: "TID_BUILDING_BLUESTAR_SCANNER_INFO",
        TID_UPGRADE: "TID_BUILDING_BLUESTAR_SCANNER_INFO",
        ConceptImage: "portrait_Anomaly",
        PrefabModel: "station_BlueStarScanner",
        PrefabModel_BuildMenu: "station_BlueStarScanner_ui",
        RequiredPlanetLevel: 5,
        UISortOrder: 90,
        Cost: 5000,
        RequiresEmptySector: 0,
        MaxOnOwnSolarSystem: 1,
        MaxPerSector: 1,
        StarScannerType: 1,
        StargateModel: "JumpGate",
        BuildNotifMode: 1,
        ShowInStarLinks: 1,
        ConstructionTime: 3,
    },
    ShipmentRelay: {
        Name: "ShipmentRelay",
        AllowBuildOnYS: 1,
        MoveHydrogenCostPerSector: 100,
        TID: "TID_BLD_RELAY",
        TID_Description: "TID_BLD_RELAY_DESCR",
        TID_INFO_SCREEN: "TID_BLD_RELAY_INFO",
        ConceptImage: "portrait_SpaceBuilding",
        PrefabModel: "station_ShipmentRelay",
        PrefabModel_BuildMenu: "station_ShipmentRelay_ui",
        RequiredPlanetLevel: 4,
        UISortOrder: 55,
        Cost: [1500, 5000, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 100000],
        MaxOnOwnSolarSystem: 1,
        MaxPerSector: 1,
        RelayBonusPct: [0, 5, 10, 20, 65, 120, 160, 190, 260, 350, 1200],
        HydroCostPerShipment: [5, 10, 20, 40, 60, 80, 100, 120, 140, 160, 200],
        BuildNotifMode: [0, 1],
        ShowInStarLinks: 1,
        RSLevelReq: [null, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        ConstructionTime: [3, 28800, 57600, 86400, 172800, 259200, 345600, 432000, 518400, 604800, 604800],
    },
    QuantumStarGate: {
        Name: "QuantumStarGate",
        MoveHydrogenCostPerSector: 1000,
        TID: "TID_BUILDING_QUANTUMSTAR_GATE",
        TID_Description: "TID_BUILDING_QUANTUMSTAR_GATE_DESCR",
        TID_INFO_SCREEN: "TID_BUILDING_QUANTUMSTAR_GATE_INFO",
        TID_UPGRADE: "TID_BUILDING_QUANTUMSTAR_GATE_INFO",
        ConceptImage: "portrait_Anomaly",
        PrefabModel: "station_DarkStarScanner",
        PrefabModel_BuildMenu: "station_DarkStarScanner_ui",
        RequiredPlanetLevel: 0,
        UISortOrder: 200,
        Cost: 12000000,
        MaxOnOwnSolarSystem: 1,
        MaxPerSector: 1,
        StarScannerType: 2,
        StargateModel: "JumpGate_DarkStar",
        ConstructionTime: 86400,
    },
    QuantumScanner: {
        Name: "QuantumScanner",
        MoveHydrogenCostPerSector: 500,
        AllowMoveInSameSectorOnly: 1,
        TID: "TID_BUILDING_QUANTUM_STAR_SCANNER",
        TID_Description: "TID_BUILDING_QUANTUM_STAR_SCANNER_DESCR",
        TID_INFO_SCREEN: "TID_BUILDING_QUANTUM_STAR_SCANNER_DESCR",
        ConceptImage: "portrait_SpaceBuilding",
        PrefabModel: "station_ShortRangeScanner",
        PrefabModel_BuildMenu: "station_ShortRangeScanner_ui",
        Cost: 1000000,
        RequiresEmptySector: 0,
        MaxOnOwnSolarSystem: 1,
        MaxPerSector: 1,
        BuildNotifMode: 2,
        QSExploreCost: 1000,
        DestroyerTarget: 1,
        MaxHealth: 1000,
        ConstructionTime: 3,
    },
    MineralRefinery: {
        Name: "MineralRefinery",
        AllowBuildOnYS: 0,
        MoveHydrogenCostPerSector: 5000,
        AllowMoveInSameSectorOnly: 1,
        TID: "TID_BUILDING_MINERAL_REFINERY",
        TID_Description: "TID_BUILDING_MINERAL_REFINERY_DESCR",
        TID_INFO_SCREEN: "TID_BUILDING_MINERAL_REFINERY_DESCR",
        TID_UPGRADE: "TID_BUILDING_MINERAL_REFINERY_DESCR",
        ConceptImage: "portrait_Anomaly",
        PrefabModel: "timeModulator",
        PrefabModel_BuildMenu: "timeModulator_ui",
        Cost: 1000000,
        RequiresStarSector: 1,
        MaxOnOwnSolarSystem: 1,
        MaxPerSector: 1,
        DestroyerTarget: 1,
        MaxHealth: 1000,
        ConstructionTime: 3,
    },
    DO_NOT_USE: {
        Name: "DO_NOT_USE",
        SeparateBuildingPerLevel: 1,
        MoveHydrogenCostPerSector: 500,
        AllowMoveInSameSectorOnly: 1,
        TID: "TID_BUILDING_HYDRO_SCANNER",
        TID_Description: "TID_BUILDING_HYDRO_SCANNER_DESCR",
        TID_INFO_SCREEN: "TID_BUILDING_HYDRO_SCANNER_INFO",
        ConceptImage: "portrait_SpaceBuilding",
        PrefabModel: "station_HydroScanner",
        PrefabModel_BuildMenu: "station_ShortRangeScanner_ui",
        RequiredPlanetLevel: 3,
        UISortOrder: 70,
        Cost: [
            120000, 180000, 250000, 500000, 1000000, 2000000, 4000000, 6000000, 8000000, 1000000, 16000000, 20000000,
        ],
        MaxPerSector: 1,
        BuildNotifMode: 1,
        RequiresDoneSRS: 1,
        GenAsteroids: [2, 5],
        SimilarBuildingID: 1,
        ConstructionTime: [
            28800, 86400, 172800, 259200, 345600, 432000, 432000, 432000, 432000, 604800, 604800, 604800,
        ],
    },
    StarHarvester: {
        Name: "StarHarvester",
        AllowBuildOnYS: 1,
        MoveHydrogenCostPerSector: 50,
        AllowMoveInSameSectorOnly: 1,
        TID: "TID_BLD_STAR_HARVESTER",
        TID_Description: "TID_BLD_STAR_HARVESTER_DESCR",
        TID_INFO_SCREEN: "TID_BLD_STAR_HARVESTER_DESCR",
        ConceptImage: "portrait_SpaceBuilding",
        PrefabModel: "timeModulator",
        PrefabModel_BuildMenu: "timeModulator_ui",
        RequiredPlanetLevel: 10,
        UISortOrder: 95,
        Cost: [70000, 90000, 140000, 190000, 550000, 1500000, 2100000, 4000000, 8000000, 16000000, 32000000],
        RequiresStarSector: 1,
        MaxOnOwnSolarSystem: 1,
        MaxPerSector: 1,
        BuildNotifMode: 1,
        ShowInStarLinks: 1,
        SHHydroPerDay: [1000, 1500, 2500, 5000, 6000, 8000, 10000, 12000, 14000, 18000, 44000],
        ConstructionTime: [86400, 86400, 86400, 172800, 172800, 259200, 259200, 259200, 432000, 604800, 864000],
    },
};
