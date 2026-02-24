function createDashboard() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();

  // Delete existing Dashboard sheet if present
  var existing = ss.getSheetByName("Dashboard");
  if (existing) { ss.deleteSheet(existing); }

  var dash = ss.insertSheet("Dashboard", 0);
  ss.setActiveSheet(dash);

  // === COLOR PALETTE ===
  var NAVY = "#032E42";
  var RED = "#D83030";
  var WHITE = "#FFFFFF";
  var LIGHT_BG = "#F8F9FA";
  var DARK_TEXT = "#1A1A2E";
  var SUBTLE = "#6C757D";
  var GREEN = "#0D652D";
  var GREEN_BG = "#B7E1CD";
  var YELLOW_BG = "#FCE8B2";
  var RED_BG = "#F4C7C3";
  var ACCENT_BLUE = "#1B98E0";

  // === SETUP COLUMN WIDTHS ===
  dash.setColumnWidth(1, 30);   // A: spacer
  dash.setColumnWidth(2, 200);  // B
  dash.setColumnWidth(3, 120);  // C
  dash.setColumnWidth(4, 120);  // D
  dash.setColumnWidth(5, 120);  // E
  dash.setColumnWidth(6, 120);  // F
  dash.setColumnWidth(7, 120);  // G
  dash.setColumnWidth(8, 120);  // H
  dash.setColumnWidth(9, 120);  // I
  dash.setColumnWidth(10, 120); // J
  dash.setColumnWidth(11, 30);  // K: spacer

  // === ROW 1-2: HEADER BANNER ===
  dash.setRowHeight(1, 10);
  dash.setRowHeight(2, 56);
  var bannerRange = dash.getRange("A2:K2");
  bannerRange.merge();
  bannerRange.setValue("   oneZipp  |  Upwork Industry Analysis Dashboard");
  bannerRange.setBackground(NAVY);
  bannerRange.setFontColor(WHITE);
  bannerRange.setFontSize(18);
  bannerRange.setFontWeight("bold");
  bannerRange.setFontFamily("Poppins");
  bannerRange.setVerticalAlignment("middle");
  bannerRange.setHorizontalAlignment("left");

  // Row 3: subtitle
  dash.setRowHeight(3, 28);
  var subRange = dash.getRange("A3:K3");
  subRange.merge();
  subRange.setValue("   500 Upwork client emails classified into 10 industries & 30 automation niches  |  Powered by n8n + OpenAI");
  subRange.setBackground("#E8EDF1");
  subRange.setFontColor(SUBTLE);
  subRange.setFontSize(10);
  subRange.setFontFamily("Roboto");
  subRange.setVerticalAlignment("middle");

  // Row 4: spacer
  dash.setRowHeight(4, 12);

  // === ROWS 5-8: KPI CARDS ===
  dash.setRowHeight(5, 14);
  dash.setRowHeight(6, 20);
  dash.setRowHeight(7, 44);
  dash.setRowHeight(8, 22);

  // KPI Card 1: Total Emails
  var kpi1Label = dash.getRange("B5:C5"); kpi1Label.merge();
  kpi1Label.setValue("TOTAL EMAILS ANALYZED"); kpi1Label.setFontSize(8); kpi1Label.setFontColor(SUBTLE); kpi1Label.setFontFamily("Roboto"); kpi1Label.setFontWeight("bold");
  var kpi1Val = dash.getRange("B7:C7"); kpi1Val.merge();
  kpi1Val.setValue("500"); kpi1Val.setFontSize(28); kpi1Val.setFontColor(NAVY); kpi1Val.setFontFamily("Poppins"); kpi1Val.setFontWeight("bold"); kpi1Val.setHorizontalAlignment("center"); kpi1Val.setVerticalAlignment("middle");
  var kpi1Sub = dash.getRange("B8:C8"); kpi1Sub.merge();
  kpi1Sub.setValue("from Upwork inbox"); kpi1Sub.setFontSize(9); kpi1Sub.setFontColor(SUBTLE); kpi1Sub.setFontFamily("Roboto"); kpi1Sub.setHorizontalAlignment("center");
  dash.getRange("B5:C8").setBorder(true, true, true, true, false, false, "#DEE2E6", SpreadsheetApp.BorderStyle.SOLID);
  dash.getRange("B5:C8").setBackground(WHITE);

  // KPI Card 2: Industries
  var kpi2Label = dash.getRange("D5:E5"); kpi2Label.merge();
  kpi2Label.setValue("INDUSTRIES IDENTIFIED"); kpi2Label.setFontSize(8); kpi2Label.setFontColor(SUBTLE); kpi2Label.setFontFamily("Roboto"); kpi2Label.setFontWeight("bold");
  var kpi2Val = dash.getRange("D7:E7"); kpi2Val.merge();
  kpi2Val.setValue("10"); kpi2Val.setFontSize(28); kpi2Val.setFontColor(RED); kpi2Val.setFontFamily("Poppins"); kpi2Val.setFontWeight("bold"); kpi2Val.setHorizontalAlignment("center"); kpi2Val.setVerticalAlignment("middle");
  var kpi2Sub = dash.getRange("D8:E8"); kpi2Sub.merge();
  kpi2Sub.setValue("unique verticals"); kpi2Sub.setFontSize(9); kpi2Sub.setFontColor(SUBTLE); kpi2Sub.setFontFamily("Roboto"); kpi2Sub.setHorizontalAlignment("center");
  dash.getRange("D5:E8").setBorder(true, true, true, true, false, false, "#DEE2E6", SpreadsheetApp.BorderStyle.SOLID);
  dash.getRange("D5:E8").setBackground(WHITE);

  // KPI Card 3: Automation Niches
  var kpi3Label = dash.getRange("F5:G5"); kpi3Label.merge();
  kpi3Label.setValue("AUTOMATION NICHES"); kpi3Label.setFontSize(8); kpi3Label.setFontColor(SUBTLE); kpi3Label.setFontFamily("Roboto"); kpi3Label.setFontWeight("bold");
  var kpi3Val = dash.getRange("F7:G7"); kpi3Val.merge();
  kpi3Val.setValue("30"); kpi3Val.setFontSize(28); kpi3Val.setFontColor(ACCENT_BLUE); kpi3Val.setFontFamily("Poppins"); kpi3Val.setFontWeight("bold"); kpi3Val.setHorizontalAlignment("center"); kpi3Val.setVerticalAlignment("middle");
  var kpi3Sub = dash.getRange("F8:G8"); kpi3Sub.merge();
  kpi3Sub.setValue("service offerings"); kpi3Sub.setFontSize(9); kpi3Sub.setFontColor(SUBTLE); kpi3Sub.setFontFamily("Roboto"); kpi3Sub.setHorizontalAlignment("center");
  dash.getRange("F5:G8").setBorder(true, true, true, true, false, false, "#DEE2E6", SpreadsheetApp.BorderStyle.SOLID);
  dash.getRange("F5:G8").setBackground(WHITE);

  // KPI Card 4: High Priority
  var kpi4Label = dash.getRange("H5:I5"); kpi4Label.merge();
  kpi4Label.setValue("HIGH PRIORITY"); kpi4Label.setFontSize(8); kpi4Label.setFontColor(SUBTLE); kpi4Label.setFontFamily("Roboto"); kpi4Label.setFontWeight("bold");
  var kpi4Val = dash.getRange("H7:I7"); kpi4Val.merge();
  kpi4Val.setValue("4"); kpi4Val.setFontSize(28); kpi4Val.setFontColor(GREEN); kpi4Val.setFontFamily("Poppins"); kpi4Val.setFontWeight("bold"); kpi4Val.setHorizontalAlignment("center"); kpi4Val.setVerticalAlignment("middle");
  var kpi4Sub = dash.getRange("H8:I8"); kpi4Sub.merge();
  kpi4Sub.setValue("industries to target first"); kpi4Sub.setFontSize(9); kpi4Sub.setFontColor(SUBTLE); kpi4Sub.setFontFamily("Roboto"); kpi4Sub.setHorizontalAlignment("center");
  dash.getRange("H5:I8").setBorder(true, true, true, true, false, false, "#DEE2E6", SpreadsheetApp.BorderStyle.SOLID);
  dash.getRange("H5:I8").setBackground(WHITE);

  // Row 9: spacer
  dash.setRowHeight(9, 12);

  // === ROWS 10-11: SECTION HEADER - EMAIL VOLUME ===
  dash.setRowHeight(10, 8);
  dash.setRowHeight(11, 26);
  var secHeader1 = dash.getRange("B11:J11"); secHeader1.merge();
  secHeader1.setValue("   EMAIL VOLUME BY INDUSTRY");
  secHeader1.setFontSize(11); secHeader1.setFontColor(NAVY); secHeader1.setFontFamily("Poppins"); secHeader1.setFontWeight("bold");
  secHeader1.setVerticalAlignment("middle");
  secHeader1.setBackground(LIGHT_BG);
  secHeader1.setBorder(false, false, true, false, false, false, NAVY, SpreadsheetApp.BorderStyle.SOLID_MEDIUM);

  // === ROWS 12-22: HORIZONTAL BAR CHART DATA ===
  var industries = [
    ["HR & Recruitment", 87],
    ["Tech & IT", 76],
    ["Marketing & Growth", 62],
    ["Finance & Accounting", 54],
    ["eCommerce", 42],
    ["Legal", 41],
    ["Construction", 38],
    ["Electrical & Trades", 35],
    ["Healthcare", 33],
    ["Real Estate", 32]
  ];

  var chartData = [["Industry", "Emails"]];
  for (var i = 0; i < industries.length; i++) {
    chartData.push(industries[i]);
  }
  dash.getRange(12, 2, chartData.length, 2).setValues(chartData);

  // Style the mini table header
  var miniHdr = dash.getRange("B12:C12");
  miniHdr.setFontSize(9); miniHdr.setFontWeight("bold"); miniHdr.setFontColor(NAVY); miniHdr.setFontFamily("Roboto");
  miniHdr.setBackground("#E8EDF1"); miniHdr.setHorizontalAlignment("center");

  // Style data rows
  for (var r = 0; r < industries.length; r++) {
    var row = 13 + r;
    dash.setRowHeight(row, 22);
    dash.getRange(row, 2).setFontSize(10).setFontFamily("Roboto").setFontColor(DARK_TEXT);
    dash.getRange(row, 3).setFontSize(10).setFontFamily("Roboto").setFontColor(DARK_TEXT).setHorizontalAlignment("center").setFontWeight("bold");
  }

  // Create bar chart
  var chartRange = dash.getRange("B12:C22");
  var barChart = dash.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(chartRange)
    .setPosition(12, 4, 0, 0)
    .setOption("title", "")
    .setOption("legend", {position: "none"})
    .setOption("colors", [RED])
    .setOption("hAxis", {textStyle: {fontSize: 10, color: DARK_TEXT}, gridlines: {color: "#E8EDF1"}})
    .setOption("vAxis", {textStyle: {fontSize: 10, color: DARK_TEXT}})
    .setOption("chartArea", {left: "35%", top: "5%", width: "60%", height: "85%"})
    .setOption("backgroundColor", WHITE)
    .setOption("bar", {groupWidth: "70%"})
    .setOption("width", 520)
    .setOption("height", 260)
    .build();
  dash.insertChart(barChart);

  // === ROW 24: SPACER ===
  dash.setRowHeight(23, 6);
  dash.setRowHeight(24, 8);

  // === ROWS 25-26: SECTION HEADER - PRIORITY BREAKDOWN ===
  dash.setRowHeight(25, 26);
  var secHeader2 = dash.getRange("B25:J25"); secHeader2.merge();
  secHeader2.setValue("   AUTOMATION PRIORITY BREAKDOWN");
  secHeader2.setFontSize(11); secHeader2.setFontColor(NAVY); secHeader2.setFontFamily("Poppins"); secHeader2.setFontWeight("bold");
  secHeader2.setVerticalAlignment("middle");
  secHeader2.setBackground(LIGHT_BG);
  secHeader2.setBorder(false, false, true, false, false, false, NAVY, SpreadsheetApp.BorderStyle.SOLID_MEDIUM);

  // Priority summary data
  var prioData = [
    ["Priority", "Count", "Industries", "Total Emails"],
    ["HIGH", 4, "HR, Tech, Marketing, eCommerce", 267],
    ["MEDIUM", 4, "Finance, Legal, Construction, Electrical", 168],
    ["LOW", 2, "Healthcare, Real Estate", 65]
  ];

  dash.getRange(26, 2, prioData.length, 4).setValues(prioData);
  dash.setRowHeight(26, 24);

  // Header row
  var prioHdr = dash.getRange("B26:E26");
  prioHdr.setFontSize(9); prioHdr.setFontWeight("bold"); prioHdr.setFontColor(NAVY); prioHdr.setFontFamily("Roboto");
  prioHdr.setBackground("#E8EDF1"); prioHdr.setHorizontalAlignment("center");

  // Data rows with priority color coding
  for (var p = 0; p < 3; p++) {
    var pRow = 27 + p;
    dash.setRowHeight(pRow, 28);
    var bg = p === 0 ? GREEN_BG : (p === 1 ? YELLOW_BG : RED_BG);
    var fc = p === 0 ? GREEN : (p === 1 ? "#7F6003" : "#A93226");
    dash.getRange(pRow, 2).setBackground(bg).setFontColor(fc).setFontWeight("bold").setFontSize(10).setFontFamily("Roboto").setHorizontalAlignment("center");
    dash.getRange(pRow, 3).setFontSize(10).setFontFamily("Roboto").setHorizontalAlignment("center").setFontWeight("bold").setFontColor(DARK_TEXT);
    dash.getRange(pRow, 4).setFontSize(10).setFontFamily("Roboto").setFontColor(DARK_TEXT);
    dash.getRange(pRow, 5).setFontSize(10).setFontFamily("Roboto").setHorizontalAlignment("center").setFontWeight("bold").setFontColor(DARK_TEXT);
  }
  dash.getRange("B26:E29").setBorder(true, true, true, true, true, true, "#DEE2E6", SpreadsheetApp.BorderStyle.SOLID);

  // Pie chart for priority
  var pieData = dash.getRange("B26:B29");
  var pieVals = dash.getRange("C26:C29");
  var pieChart = dash.newChart()
    .setChartType(Charts.ChartType.PIE)
    .addRange(dash.getRange("B26:C29"))
    .setPosition(26, 6, 0, 0)
    .setOption("title", "Priority Distribution")
    .setOption("titleTextStyle", {fontSize: 11, color: NAVY, bold: true})
    .setOption("colors", ["#27AE60", "#F39C12", "#E74C3C"])
    .setOption("pieHole", 0.4)
    .setOption("legend", {position: "labeled", textStyle: {fontSize: 10}})
    .setOption("chartArea", {left: "10%", top: "15%", width: "80%", height: "70%"})
    .setOption("backgroundColor", WHITE)
    .setOption("width", 380)
    .setOption("height", 220)
    .build();
  dash.insertChart(pieChart);

  // === ROW 31: SPACER ===
  dash.setRowHeight(30, 6);
  dash.setRowHeight(31, 8);

  // === ROWS 32+: TOP OPPORTUNITIES TABLE ===
  dash.setRowHeight(32, 26);
  var secHeader3 = dash.getRange("B32:J32"); secHeader3.merge();
  secHeader3.setValue("   TOP 10 AUTOMATION OPPORTUNITIES (by frequency)");
  secHeader3.setFontSize(11); secHeader3.setFontColor(NAVY); secHeader3.setFontFamily("Poppins"); secHeader3.setFontWeight("bold");
  secHeader3.setVerticalAlignment("middle");
  secHeader3.setBackground(LIGHT_BG);
  secHeader3.setBorder(false, false, true, false, false, false, NAVY, SpreadsheetApp.BorderStyle.SOLID_MEDIUM);

  var topOpp = [
    ["#", "Industry", "Niche", "Freq.", "Tools", "Complexity", "Build Time"],
    [1, "HR & Recruitment", "Resume screening & ATS integration", 52, "n8n, OpenAI, Greenhouse", "Medium", "5 days"],
    [2, "Tech & IT", "CI/CD pipelines & cloud infrastructure", 45, "n8n, GitHub Actions, AWS", "High", "7 days"],
    [3, "Marketing & Growth", "Social scheduling & lead nurture", 41, "n8n, Buffer, HubSpot", "Low", "3 days"],
    [4, "Tech & IT", "Monitoring, alerts & API integrations", 38, "n8n, PagerDuty, Datadog", "Medium", "5 days"],
    [5, "Finance & Accounting", "Invoice processing & expense categorization", 36, "n8n, QuickBooks, OpenAI", "Medium", "5 days"],
    [6, "Marketing & Growth", "Email sequences & reporting dashboards", 35, "n8n, Mailchimp, Sheets", "Medium", "4 days"],
    [7, "HR & Recruitment", "Onboarding workflow automation", 34, "n8n, Google Workspace", "Low", "3 days"],
    [8, "Tech & IT", "Helpdesk automation", 29, "n8n, Zendesk, Slack", "Low", "3 days"],
    [9, "eCommerce", "Order management & inventory sync", 28, "n8n, Shopify, ShipStation", "Medium", "5 days"],
    [10, "Finance & Accounting", "Bank reconciliation & reporting", 28, "n8n, Plaid, Sheets", "High", "6 days"]
  ];

  dash.getRange(33, 2, topOpp.length, 7).setValues(topOpp);
  dash.setRowHeight(33, 26);

  // Header row
  var oppHdr = dash.getRange(33, 2, 1, 7);
  oppHdr.setBackground(NAVY).setFontColor(WHITE).setFontWeight("bold").setFontSize(9).setFontFamily("Roboto").setHorizontalAlignment("center").setVerticalAlignment("middle").setWrap(true);

  // Data rows
  var oppBgs = [];
  var oppFontColors = [];
  for (var o = 0; o < 10; o++) {
    var oRow = 34 + o;
    dash.setRowHeight(oRow, 24);
    var rowBg = (o % 2 === 1) ? LIGHT_BG : WHITE;
    oppBgs.push([rowBg, rowBg, rowBg, rowBg, rowBg, rowBg, rowBg]);
    oppFontColors.push([DARK_TEXT, DARK_TEXT, DARK_TEXT, DARK_TEXT, DARK_TEXT, DARK_TEXT, DARK_TEXT]);
  }
  var oppDataRange = dash.getRange(34, 2, 10, 7);
  oppDataRange.setBackgrounds(oppBgs);
  oppDataRange.setFontColors(oppFontColors);
  oppDataRange.setFontSize(10);
  oppDataRange.setFontFamily("Roboto");
  oppDataRange.setVerticalAlignment("middle");

  // Alignment
  dash.getRange(34, 2, 10, 1).setHorizontalAlignment("center"); // #
  dash.getRange(34, 5, 10, 1).setHorizontalAlignment("center"); // Freq
  dash.getRange(34, 7, 10, 1).setHorizontalAlignment("center"); // Complexity
  dash.getRange(34, 8, 10, 1).setHorizontalAlignment("center"); // Build Time

  // Borders
  dash.getRange(33, 2, 11, 7).setBorder(true, true, true, true, true, true, "#DEE2E6", SpreadsheetApp.BorderStyle.SOLID);

  // Conditional format for complexity in the table
  var oppComplexity = dash.getRange("G34:G43");
  var oppRules = dash.getConditionalFormatRules();
  oppRules.push(SpreadsheetApp.newConditionalFormatRule().whenTextEqualTo("High").setBackground(RED_BG).setFontColor("#A93226").setBold(true).setRanges([oppComplexity]).build());
  oppRules.push(SpreadsheetApp.newConditionalFormatRule().whenTextEqualTo("Medium").setBackground(YELLOW_BG).setFontColor("#7F6003").setBold(true).setRanges([oppComplexity]).build());
  oppRules.push(SpreadsheetApp.newConditionalFormatRule().whenTextEqualTo("Low").setBackground(GREEN_BG).setFontColor(GREEN).setBold(true).setRanges([oppComplexity]).build());
  dash.setConditionalFormatRules(oppRules);

  // === ROW 45: SPACER ===
  dash.setRowHeight(44, 6);
  dash.setRowHeight(45, 8);

  // === ROWS 46+: KEY INSIGHTS ===
  dash.setRowHeight(46, 26);
  var secHeader4 = dash.getRange("B46:J46"); secHeader4.merge();
  secHeader4.setValue("   KEY INSIGHTS & RECOMMENDATIONS");
  secHeader4.setFontSize(11); secHeader4.setFontColor(NAVY); secHeader4.setFontFamily("Poppins"); secHeader4.setFontWeight("bold");
  secHeader4.setVerticalAlignment("middle");
  secHeader4.setBackground(LIGHT_BG);
  secHeader4.setBorder(false, false, true, false, false, false, NAVY, SpreadsheetApp.BorderStyle.SOLID_MEDIUM);

  var insights = [
    ["1", "Highest Demand", "HR & Recruitment leads with 87 emails (17.4%) - resume screening is the #1 automation niche across all industries"],
    ["2", "Quick Win Stack", "4 HIGH-priority industries (HR, Tech, Marketing, eCommerce) represent 53.4% of all emails - focus outreach here first"],
    ["3", "Tool Overlap", "n8n + OpenAI appears in 8 of 30 niches - build reusable templates to accelerate delivery across verticals"],
    ["4", "Low-Hanging Fruit", "11 niches rated LOW complexity with 3-day builds - ideal for productized service packages at fixed pricing"],
    ["5", "Revenue Potential", "At avg. $2K per automation build, the top 10 niches alone represent $20K+ in serviceable pipeline"],
    ["6", "eCommerce Dark Horse", "eCommerce ranks 5th by volume but HIGH priority - Shopify ecosystem has strong API support for fast builds"]
  ];

  for (var ins = 0; ins < insights.length; ins++) {
    var insRow = 47 + ins;
    dash.setRowHeight(insRow, 36);
    dash.getRange(insRow, 2).setValue(insights[ins][0]).setFontSize(14).setFontColor(RED).setFontWeight("bold").setFontFamily("Poppins").setHorizontalAlignment("center").setVerticalAlignment("middle");
    dash.getRange(insRow, 3, 1, 2).merge().setValue(insights[ins][1]).setFontSize(10).setFontColor(NAVY).setFontWeight("bold").setFontFamily("Roboto").setVerticalAlignment("middle");
    dash.getRange(insRow, 5, 1, 6).merge().setValue(insights[ins][2]).setFontSize(10).setFontColor(DARK_TEXT).setFontFamily("Roboto").setVerticalAlignment("middle").setWrap(true);
  }

  // Border around insights
  dash.getRange(47, 2, 6, 9).setBorder(true, true, true, true, false, true, "#DEE2E6", SpreadsheetApp.BorderStyle.SOLID);

  // === FOOTER ===
  dash.setRowHeight(53, 6);
  dash.setRowHeight(54, 30);
  var footer = dash.getRange("B54:J54"); footer.merge();
  footer.setValue("   oneZipp  |  Scaling Simplicity. Automating Intelligence.  |  Generated by n8n + OpenAI classification pipeline");
  footer.setBackground(NAVY);
  footer.setFontColor("#8EACBB");
  footer.setFontSize(9);
  footer.setFontFamily("Roboto");
  footer.setVerticalAlignment("middle");

  // Set background for entire dashboard area
  dash.getRange("A1:K54").setBackground(null);
  dash.getRange("A1:A54").setBackground(WHITE);
  dash.getRange("K1:K54").setBackground(WHITE);

  // Hide gridlines
  dash.setHiddenGridlines(true);

  SpreadsheetApp.flush();
}
