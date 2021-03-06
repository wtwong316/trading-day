Fields = [
  { key: "sector", value: "Sector" },
  { key: "ticker", value: "Ticker" },
  { key: "order", value: "Order" },
  { key: "marketCap", value: "Market Capitalization" },
  { key: "dividendYield", value: "Dividend Yield", format: "%" },
  { key: "payoutRatio", value: "Payout Ratio", format: "%" },
  { key: "employees", value: "Employees" },
  { key: "income", value: "Income" },
  { key: "sales", value: "Sales" },
  { key: "epsQoQ", value: "EPS growth Q/Q", format: "%" },
  { key: "epsYoY", value: "EPS growth this Y/Y", format: "%" },
  { key: "epsYoY1", value: "EPS growth next Y/Y", format: "%" },
  { key: "eps5Years", value: "EPS growth past 5 years", format: "%" },
  { key: "estLTGrowth", value: "EPS growth long term est.", format: "%" },
  { key: "salesQoQ", value: "Sales growth Q/Q", format: "%" },
  { key: "sales5Years", value: "Sales growth past 5 years", format: "%" },
  { key: "PE", value: "P/E" },
  { key: "forwardPE", value: "Forward P/E" },
  { key: "PEG", value: "PEG" },
  { key: "PS", value: "P/S" },
  { key: "PB", value: "P/B" },
  { key: "PC", value: "P/C" },
  { key: "PFCF", value: "P/FCF" },
  { key: "roi", value: "ROI" },
  { key: "roe", value: "ROE" },
  { key: "roa", value: "ROA" },
  { key: "grossMargin", value: "Gross Margin", format: "%" },
  { key: "operMargin", value: "Operating Margin", format: "%" },
  { key: "netMargin", value: "Profit Margin", format: "%" },
  { key: "curRatio", value: "Current Ratio" },
  { key: "quickRatio", value: "Quick Ratio" },
  { key: "ltdebtEq", value: "Long Term Debt to Equity" },
  { key: "debtEq", value: "Total Debt to Equity" },
  { key: "lastChange", value: "Change", format: "%" },
  { key: "changeOpen", value: "Change from Open", format: "%" },
  { key: "gap", value: "Gap", format: "%" },
  { key: "lastVolume", value: "Volume" },
  { key: "lastVolumeUsd", value: "Volume USD" },
  { key: "averageVolume", value: "Average Volume" },
  { key: "averageVolumeUsd", value: "Average Volume USD" },
  { key: "relativeVolume", value: "Relative Volume" },
  { key: "perf1w", value: "1 Week Performance", format: "%" },
  { key: "perf4w", value: "1 Month Performance", format: "%" },
  { key: "perf13w", value: "3 Month Performance", format: "%" },
  { key: "perf26w", value: "6 Month Performance", format: "%" },
  { key: "perf52w", value: "1 Year Performance", format: "%" },
  { key: "perfYtd", value: "Year To Date Performance", format: "%" },
  { key: "volatility1w", value: "Weekly Volatility", format: "%" },
  { key: "volatility4w", value: "Monthly Volatlity", format: "%" },
  { key: "beta", value: "Beta" },
  { key: "low52w", value: "52-Week Low", format: "%" },
  { key: "high52w", value: "52-Week High", format: "%" },
  { key: "sma20", value: "Simple Moving Average 20", format: "%" },
  { key: "sma50", value: "Simple Moving Average 50", format: "%" },
  { key: "sma200", value: "Simple Moving Average 200", format: "%" },
  { key: "rsi", value: "Relative Strength Index 14" },
  { key: "insiderOwn", value: "Insider Ownership", format: "%" },
  { key: "insiderTrans", value: "Insider Transactions", format: "%" },
  { key: "instOwn", value: "Institutional Ownership", format: "%" },
  { key: "instTrans", value: "Institutional Transactions", format: "%" },
  { key: "shortInterestShare", value: "Short Interest Share", format: "%" },
  { key: "shortInterestRatio", value: "Short Interest Ratio" },
  { key: "consRecom", value: "Analyst Recommendation" },
  { key: "targetPrice", value: "Target Price", format: "%" }
];

BubbleSize = [
  { key: "const", value: "Constant" },
  { key: "marketCap", value: "Market Capitalization" },
  { key: "lastVolume", value: "Volume" },
  { key: "lastVolumeUsd", value: "Volume USD" },
  { key: "averageVolume", value: "Average Volume" },
  { key: "averageVolumeUsd", value: "Average Volume USD" },
  { key: "relativeVolume", value: "Relative Volume" }
];

Index = [
  { key: "any", value: "Any" },
  { key: "sp500", value: "S&P 500" },
  { key: "dji", value: "DJIA" }
];
BubbleColor = [
  { key: "const", value: "Constant" },
  { key: "sector", value: "Sector" },
  { key: "industry", value: "Industry" },
  { key: "country", value: "Country" },
  { key: "marketCap", value: "Market Capitalization" },
  { key: "lastChange", value: "Change", format: "%" },
  { key: "perf1w", value: "1 Week Performance", format: "%" },
  { key: "perf4w", value: "1 Month Performance", format: "%" },
  { key: "perf13w", value: "3 Month Performance", format: "%" },
  { key: "perf26w", value: "6 Month Performance", format: "%" },
  { key: "perf52w", value: "1 Year Performance", format: "%" },
  { key: "perfYtd", value: "Year To Date Performance", format: "%" },
  { key: "lastVolume", value: "Volume" },
  { key: "lastVolumeUsd", value: "Volume USD" },
  { key: "averageVolume", value: "Average Volume" },
  { key: "averageVolumeUsd", value: "Average Volume USD" },
  { key: "relativeVolume", value: "Relative Volume" },
  { key: "consRecom", value: "Analyst Recommendation" }
];
Sector = [
  { key: "", value: "Any" },
  { key: "basicmaterials", value: "Basic Materials" },
  { key: "conglomerates", value: "Conglomerates" },
  { key: "consumergoods", value: "Consumer Goods" },
  { key: "financial", value: "Financial" },
  { key: "healthcare", value: "Healthcare" },
  { key: "industrialgoods", value: "Industrial Goods" },
  { key: "services", value: "Services" },
  { key: "technology", value: "Technology" },
  { key: "utilities", value: "Utilities" }
];

const Industry = [
  { key: "", value: "Any" },
  { key: "stocksonly", value: "Stocks only (ex-Funds)" },
  { key: "exchangetradedfund", value: "Exchange Traded Fund" },
  { key: "accidenthealthinsurance", value: "Accident & Health Insurance" },
  { key: "advertisingagencies", value: "Advertising Agencies" },
  {
    key: "aerospacedefensemajordiversified",
    value: "Aerospace/Defense - Major Diversified"
  },
  {
    key: "aerospacedefenseproductsservices",
    value: "Aerospace/Defense Products & Services"
  },
  { key: "agriculturalchemicals", value: "Agricultural Chemicals" },
  {
    key: "airdeliveryfreightservices",
    value: "Air Delivery & Freight Services"
  },
  { key: "airservicesother", value: "Air Services, Other" },
  { key: "aluminum", value: "Aluminum" },
  { key: "apparelstores", value: "Apparel Stores" },
  { key: "appliances", value: "Appliances" },
  { key: "applicationsoftware", value: "Application Software" },
  { key: "assetmanagement", value: "Asset Management" },
  { key: "autodealerships", value: "Auto Dealerships" },
  { key: "automanufacturersmajor", value: "Auto Manufacturers - Major" },
  { key: "autoparts", value: "Auto Parts" },
  { key: "autopartsstores", value: "Auto Parts Stores" },
  { key: "autopartswholesale", value: "Auto Parts Wholesale" },
  { key: "basicmaterialswholesale", value: "Basic Materials Wholesale" },
  { key: "beveragesbrewers", value: "Beverages - Brewers" },
  { key: "beveragessoftdrinks", value: "Beverages - Soft Drinks" },
  {
    key: "beverageswineriesdistillers",
    value: "Beverages - Wineries & Distillers"
  },
  { key: "biotechnology", value: "Biotechnology" },
  { key: "broadcastingradio", value: "Broadcasting - Radio" },
  { key: "broadcastingtv", value: "Broadcasting - TV" },
  { key: "buildingmaterialswholesale", value: "Building Materials Wholesale" },
  { key: "businessequipment", value: "Business Equipment" },
  { key: "businessservices", value: "Business Services" },
  { key: "businesssoftwareservices", value: "Business Software & Services" },
  { key: "catalogmailorderhouses", value: "Catalog & Mail Order Houses" },
  { key: "catvsystems", value: "CATV Systems" },
  { key: "cement", value: "Cement" },
  { key: "chemicalsmajordiversified", value: "Chemicals - Major Diversified" },
  { key: "cigarettes", value: "Cigarettes" },
  { key: "cleaningproducts", value: "Cleaning Products" },
  { key: "closedendfunddebt", value: "Closed-End Fund - Debt" },
  { key: "closedendfundequity", value: "Closed-End Fund - Equity" },
  { key: "closedendfundforeign", value: "Closed-End Fund - Foreign" },
  { key: "communicationequipment", value: "Communication Equipment" },
  { key: "computerbasedsystems", value: "Computer Based Systems" },
  { key: "computerperipherals", value: "Computer Peripherals" },
  { key: "computerswholesale", value: "Computers Wholesale" },
  { key: "confectioners", value: "Confectioners" },
  { key: "conglomerates", value: "Conglomerates" },
  { key: "consumerservices", value: "Consumer Services" },
  { key: "copper", value: "Copper" },
  { key: "creditservices", value: "Credit Services" },
  { key: "dairyproducts", value: "Dairy Products" },
  { key: "datastoragedevices", value: "Data Storage Devices" },
  { key: "departmentstores", value: "Department Stores" },
  { key: "diagnosticsubstances", value: "Diagnostic Substances" },
  { key: "discountvarietystores", value: "Discount, Variety Stores" },
  {
    key: "diversifiedcommunicationservices",
    value: "Diversified Communication Services"
  },
  { key: "diversifiedcomputersystems", value: "Diversified Computer Systems" },
  { key: "diversifiedelectronics", value: "Diversified Electronics" },
  { key: "diversifiedinvestments", value: "Diversified Investments" },
  { key: "diversifiedmachinery", value: "Diversified Machinery" },
  { key: "diversifiedutilities", value: "Diversified Utilities" },
  { key: "drugdelivery", value: "Drug Delivery" },
  { key: "drugmanufacturersmajor", value: "Drug Manufacturers - Major" },
  { key: "drugmanufacturersother", value: "Drug Manufacturers - Other" },
  { key: "drugrelatedproducts", value: "Drug Related Products" },
  { key: "drugsgeneric", value: "Drugs - Generic" },
  { key: "drugstores", value: "Drug Stores" },
  { key: "drugswholesale", value: "Drugs Wholesale" },
  { key: "educationtrainingservices", value: "Education & Training Services" },
  { key: "electricutilities", value: "Electric Utilities" },
  { key: "electronicequipment", value: "Electronic Equipment" },
  { key: "electronicsstores", value: "Electronics Stores" },
  { key: "electronicswholesale", value: "Electronics Wholesale" },
  { key: "entertainmentdiversified", value: "Entertainment - Diversified" },
  { key: "farmconstructionmachinery", value: "Farm & Construction Machinery" },
  { key: "farmproducts", value: "Farm Products" },
  { key: "foodmajordiversified", value: "Food - Major Diversified" },
  { key: "foodwholesale", value: "Food Wholesale" },
  { key: "foreignmoneycenterbanks", value: "Foreign Money Center Banks" },
  { key: "foreignregionalbanks", value: "Foreign Regional Banks" },
  { key: "foreignutilities", value: "Foreign Utilities" },
  { key: "gamingactivities", value: "Gaming Activities" },
  { key: "gasutilities", value: "Gas Utilities" },
  { key: "generalbuildingmaterials", value: "General Building Materials" },
  { key: "generalcontractors", value: "General Contractors" },
  { key: "generalentertainment", value: "General Entertainment" },
  { key: "gold", value: "Gold" },
  { key: "grocerystores", value: "Grocery Stores" },
  {
    key: "healthcareinformationservices",
    value: "Healthcare Information Services"
  },
  { key: "healthcareplans", value: "Health Care Plans" },
  { key: "heavyconstruction", value: "Heavy Construction" },
  { key: "homefurnishingsfixtures", value: "Home Furnishings & Fixtures" },
  { key: "homefurnishingstores", value: "Home Furnishing Stores" },
  { key: "homehealthcare", value: "Home Health Care" },
  { key: "homeimprovementstores", value: "Home Improvement Stores" },
  { key: "hospitals", value: "Hospitals" },
  { key: "housewaresaccessories", value: "Housewares & Accessories" },
  { key: "independentoilgas", value: "Independent Oil & Gas" },
  {
    key: "industrialelectricalequipment",
    value: "Industrial Electrical Equipment"
  },
  {
    key: "industrialequipmentcomponents",
    value: "Industrial Equipment & Components"
  },
  {
    key: "industrialequipmentwholesale",
    value: "Industrial Equipment Wholesale"
  },
  { key: "industrialmetalsminerals", value: "Industrial Metals & Minerals" },
  {
    key: "informationdeliveryservices",
    value: "Information & Delivery Services"
  },
  {
    key: "informationtechnologyservices",
    value: "Information Technology Services"
  },
  { key: "insurancebrokers", value: "Insurance Brokers" },
  {
    key: "internetinformationproviders",
    value: "Internet Information Providers"
  },
  { key: "internetserviceproviders", value: "Internet Service Providers" },
  { key: "internetsoftwareservices", value: "Internet Software & Services" },
  {
    key: "investmentbrokeragenational",
    value: "Investment Brokerage - National"
  },
  {
    key: "investmentbrokerageregional",
    value: "Investment Brokerage - Regional"
  },
  { key: "jewelrystores", value: "Jewelry Stores" },
  { key: "lifeinsurance", value: "Life Insurance" },
  { key: "lodging", value: "Lodging" },
  { key: "longdistancecarriers", value: "Long Distance Carriers" },
  { key: "longtermcarefacilities", value: "Long-Term Care Facilities" },
  { key: "lumberwoodproduction", value: "Lumber, Wood Production" },
  { key: "machinetoolsaccessories", value: "Machine Tools & Accessories" },
  { key: "majorairlines", value: "Major Airlines" },
  { key: "majorintegratedoilgas", value: "Major Integrated Oil & Gas" },
  { key: "managementservices", value: "Management Services" },
  { key: "manufacturedhousing", value: "Manufactured Housing" },
  { key: "marketingservices", value: "Marketing Services" },
  { key: "meatproducts", value: "Meat Products" },
  {
    key: "medicalappliancesequipment",
    value: "Medical Appliances & Equipment"
  },
  { key: "medicalequipmentwholesale", value: "Medical Equipment Wholesale" },
  {
    key: "medicalinstrumentssupplies",
    value: "Medical Instruments & Supplies"
  },
  {
    key: "medicallaboratoriesresearch",
    value: "Medical Laboratories & Research"
  },
  { key: "medicalpractitioners", value: "Medical Practitioners" },
  { key: "metalfabrication", value: "Metal Fabrication" },
  { key: "moneycenterbanks", value: "Money Center Banks" },
  { key: "mortgageinvestment", value: "Mortgage Investment" },
  { key: "movieproductiontheaters", value: "Movie Production, Theaters" },
  {
    key: "multimediagraphicssoftware",
    value: "Multimedia & Graphics Software"
  },
  { key: "musicvideostores", value: "Music & Video Stores" },
  {
    key: "networkingcommunicationdevices",
    value: "Networking & Communication Devices"
  },
  { key: "nonmetallicmineralmining", value: "Nonmetallic Mineral Mining" },
  { key: "officesupplies", value: "Office Supplies" },
  {
    key: "oilgasdrillingexploration",
    value: "Oil & Gas Drilling & Exploration"
  },
  { key: "oilgasequipmentservices", value: "Oil & Gas Equipment & Services" },
  { key: "oilgaspipelines", value: "Oil & Gas Pipelines" },
  { key: "oilgasrefiningmarketing", value: "Oil & Gas Refining & Marketing" },
  { key: "packagingcontainers", value: "Packaging & Containers" },
  { key: "paperpaperproducts", value: "Paper & Paper Products" },
  { key: "personalcomputers", value: "Personal Computers" },
  { key: "personalproducts", value: "Personal Products" },
  { key: "personalservices", value: "Personal Services" },
  {
    key: "photographicequipmentsupplies",
    value: "Photographic Equipment & Supplies"
  },
  {
    key: "pollutiontreatmentcontrols",
    value: "Pollution & Treatment Controls"
  },
  { key: "printedcircuitboards", value: "Printed Circuit Boards" },
  { key: "processedpackagedgoods", value: "Processed & Packaged Goods" },
  { key: "processingsystemsproducts", value: "Processing Systems & Products" },
  { key: "propertycasualtyinsurance", value: "Property & Casualty Insurance" },
  { key: "propertymanagement", value: "Property Management" },
  { key: "publishingbooks", value: "Publishing - Books" },
  { key: "publishingnewspapers", value: "Publishing - Newspapers" },
  { key: "publishingperiodicals", value: "Publishing - Periodicals" },
  { key: "railroads", value: "Railroads" },
  { key: "realestatedevelopment", value: "Real Estate Development" },
  { key: "recreationalgoodsother", value: "Recreational Goods, Other" },
  { key: "recreationalvehicles", value: "Recreational Vehicles" },
  { key: "regionalairlines", value: "Regional Airlines" },
  { key: "regionalmidatlanticbanks", value: "Regional - Mid-Atlantic Banks" },
  { key: "regionalmidwestbanks", value: "Regional - Midwest Banks" },
  { key: "regionalnortheastbanks", value: "Regional - Northeast Banks" },
  { key: "regionalpacificbanks", value: "Regional - Pacific Banks" },
  { key: "regionalsoutheastbanks", value: "Regional - Southeast Banks" },
  { key: "regionalsouthwestbanks", value: "Regional - Southwest  Banks" },
  { key: "reitdiversified", value: "REIT - Diversified" },
  { key: "reithealthcarefacilities", value: "REIT - Healthcare Facilities" },
  { key: "reithotelmotel", value: "REIT - Hotel/Motel" },
  { key: "reitindustrial", value: "REIT - Industrial" },
  { key: "reitoffice", value: "REIT - Office" },
  { key: "reitresidential", value: "REIT - Residential" },
  { key: "reitretail", value: "REIT - Retail" },
  { key: "rentalleasingservices", value: "Rental & Leasing Services" },
  { key: "researchservices", value: "Research Services" },
  { key: "residentialconstruction", value: "Residential Construction" },
  { key: "resortscasinos", value: "Resorts & Casinos" },
  { key: "restaurants", value: "Restaurants" },
  { key: "rubberplastics", value: "Rubber & Plastics" },
  { key: "savingsloans", value: "Savings & Loans" },
  {
    key: "scientifictechnicalinstruments",
    value: "Scientific & Technical Instruments"
  },
  {
    key: "securityprotectionservices",
    value: "Security & Protection Services"
  },
  { key: "securitysoftwareservices", value: "Security Software & Services" },
  { key: "semiconductorbroadline", value: "Semiconductor - Broad Line" },
  {
    key: "semiconductorequipmentmaterials",
    value: "Semiconductor Equipment & Materials"
  },
  {
    key: "semiconductorintegratedcircuits",
    value: "Semiconductor - Integrated Circuits"
  },
  { key: "semiconductormemorychips", value: "Semiconductor- Memory Chips" },
  { key: "semiconductorspecialized", value: "Semiconductor - Specialized" },
  { key: "shipping", value: "Shipping" },
  { key: "silver", value: "Silver" },
  { key: "smalltoolsaccessories", value: "Small Tools & Accessories" },
  { key: "specializedhealthservices", value: "Specialized Health Services" },
  { key: "specialtychemicals", value: "Specialty Chemicals" },
  { key: "specialtyeateries", value: "Specialty Eateries" },
  { key: "specialtyretailother", value: "Specialty Retail, Other" },
  { key: "sportingactivities", value: "Sporting Activities" },
  { key: "sportinggoods", value: "Sporting Goods" },
  { key: "sportinggoodsstores", value: "Sporting Goods Stores" },
  {
    key: "staffingoutsourcingservices",
    value: "Staffing & Outsourcing Services"
  },
  { key: "steeliron", value: "Steel & Iron" },
  { key: "suretytitleinsurance", value: "Surety & Title Insurance" },
  { key: "synthetics", value: "Synthetics" },
  { key: "technicalservices", value: "Technical Services" },
  { key: "technicalsystemsoftware", value: "Technical & System Software" },
  { key: "telecomservicesdomestic", value: "Telecom Services - Domestic" },
  { key: "telecomservicesforeign", value: "Telecom Services - Foreign" },
  { key: "textileapparelclothing", value: "Textile - Apparel Clothing" },
  {
    key: "textileapparelfootwearaccessories",
    value: "Textile - Apparel Footwear & Accessories"
  },
  { key: "textileindustrial", value: "Textile Industrial" },
  { key: "tobaccoproductsother", value: "Tobacco Products, Other" },
  { key: "toyhobbystores", value: "Toy & Hobby Stores" },
  { key: "toysgames", value: "Toys & Games" },
  { key: "trucking", value: "Trucking" },
  { key: "trucksothervehicles", value: "Trucks & Other Vehicles" },
  { key: "wastemanagement", value: "Waste Management" },
  { key: "waterutilities", value: "Water Utilities" },
  { key: "wholesaleother", value: "Wholesale, Other" },
  { key: "wirelesscommunications", value: "Wireless Communications" }
];

const MarketCaps = [
  { key: "", value: "Any" },
  { key: "mega", value: "Mega ($200bln and more)" },
  { key: "large", value: "Large ($10bln to $200bln)" },
  { key: "mid", value: "Mid ($2bln to $10bln)" },
  { key: "small", value: "Small ($300mln to $2bln)" },
  { key: "micro", value: "Micro ($50mln to $300mln)" },
  { key: "nano", value: "Nano (under $50mln)" },
  { key: "largeover", value: "+Large (over $10bln)" },
  { key: "midover", value: "+Mid (over $2bln)" },
  { key: "smallover", value: "+Small (over $300mln)" },
  { key: "microover", value: "+Micro (over $50mln)" },
  { key: "largeunder", value: "-Large (under $200bln)" },
  { key: "midunder", value: "-Mid (under $10bln)" },
  { key: "smallunder", value: "-Small (under $2bln)" },
  { key: "microunder", value: "-Micro (under $300mln)" }
];

AverageVolume = [
  { key: "", value: "Any" },
  { key: "u50", value: "Under 50K" },
  { key: "u100", value: "Under 100K" },
  { key: "u500", value: "Under 500K" },
  { key: "u750", value: "Under 750K" },
  { key: "u1000", value: "Under 1M" },
  { key: "o50", value: "Over 50K" },
  { key: "o100", value: "Over 100K" },
  { key: "o200", value: "Over 200K" },
  { key: "o300", value: "Over 300K" },
  { key: "o400", value: "Over 400K" },
  { key: "o500", value: "Over 500K" },
  { key: "o750", value: "Over 750K" },
  { key: "o1000", value: "Over 1M" },
  { key: "o2000", value: "Over 2M" },
  { key: "100to500", value: "100K to 500K" },
  { key: "100to1000", value: "100K to 1M" },
  { key: "500to1000", value: "500K to 1M" },
  { key: "500to10000", value: "500K to 10M" }
];

