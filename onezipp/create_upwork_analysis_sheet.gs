/**
 * oneZipp - Upwork Industry Analysis Google Sheet Generator (Optimized)
 *
 * HOW TO USE:
 * 1. Open a new Google Sheet at https://sheets.google.com/create
 * 2. Go to Extensions > Apps Script
 * 3. Delete any existing code and paste this entire script
 * 4. Click the Run button to execute createUpworkAnalysisSheet()
 * 5. Grant permissions when prompted
 * 6. Return to your spreadsheet - it will be fully populated and formatted
 */

function createUpworkAnalysisSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  ss.rename("oneZipp - Upwork Industry Analysis");

  // === SHEET 1: Industry Breakdown ===
  var sheet1 = ss.getSheets()[0];
  sheet1.setName("Industry Breakdown");

  var allData1 = [
    ["Industry", "Email Count", "% of Total", "Top Niche 1", "Top Niche 2", "Top Niche 3", "Automation Priority"],
    ["HR & Recruitment", 87, "17.4%", "Resume screening & ATS integration", "Onboarding workflow automation", "Payroll & job posting distribution", "HIGH"],
    ["Tech & IT", 76, "15.2%", "CI/CD pipelines & cloud infrastructure", "Monitoring, alerts & API integrations", "Helpdesk automation", "HIGH"],
    ["Marketing & Growth", 62, "12.4%", "Social scheduling & lead nurture", "Email sequences & reporting dashboards", "Content repurposing workflows", "HIGH"],
    ["Finance & Accounting", 54, "10.8%", "Invoice processing & expense categorization", "Bank reconciliation & financial reporting", "Accounts receivable follow-up", "MEDIUM"],
    ["Legal", 41, "8.2%", "Contract review & NDA routing", "Deadline tracking & client intake", "Legal research automation", "MEDIUM"],
    ["Construction", 38, "7.6%", "Project status tracking & permit filing", "Subcontractor coordination & bid automation", "Safety compliance workflows", "MEDIUM"],
    ["Electrical & Trades", 35, "7.0%", "Job quoting & compliance scheduling", "Inventory tracking & digital job cards", "Dispatch & scheduling automation", "MEDIUM"],
    ["Healthcare", 33, "6.6%", "Appointment reminders & patient intake", "Medical billing & referral tracking", "Staff scheduling automation", "LOW"],
    ["eCommerce", 42, "8.4%", "Order management & inventory sync", "Return processing & review responses", "Abandoned cart recovery", "HIGH"],
    ["Real Estate", 32, "6.4%", "Lead follow-up & listing syndication", "Document signing & CRM pipeline", "Open house follow-up automation", "LOW"]
  ];

  // Write all data at once
  sheet1.getRange(1, 1, allData1.length, 7).setValues(allData1);

  // Batch background colors - header + alternating rows
  var bgColors1 = [];
  bgColors1.push(["#032E42","#032E42","#032E42","#032E42","#032E42","#032E42","#032E42"]);
  for (var i = 1; i < allData1.length; i++) {
    if (i % 2 === 0) {
      bgColors1.push(["#F8F9FA","#F8F9FA","#F8F9FA","#F8F9FA","#F8F9FA","#F8F9FA","#F8F9FA"]);
    } else {
      bgColors1.push([null,null,null,null,null,null,null]);
    }
  }
  sheet1.getRange(1, 1, allData1.length, 7).setBackgrounds(bgColors1);

  // Batch font colors
  var fontColors1 = [];
  fontColors1.push(["#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF"]);
  for (var i = 1; i < allData1.length; i++) {
    fontColors1.push([null,null,null,null,null,null,null]);
  }
  sheet1.getRange(1, 1, allData1.length, 7).setFontColors(fontColors1);

  // Batch font weights
  var fontWeights1 = [];
  fontWeights1.push(["bold","bold","bold","bold","bold","bold","bold"]);
  for (var i = 1; i < allData1.length; i++) {
    fontWeights1.push(["normal","normal","normal","normal","normal","normal","normal"]);
  }
  sheet1.getRange(1, 1, allData1.length, 7).setFontWeights(fontWeights1);

  // Header font size and alignment
  var headerRange1 = sheet1.getRange(1, 1, 1, 7);
  headerRange1.setFontSize(11);
  headerRange1.setHorizontalAlignment("center");
  headerRange1.setVerticalAlignment("middle");
  headerRange1.setWrap(true);
  sheet1.setRowHeight(1, 40);

  // Data area formatting
  var dataRange1 = sheet1.getRange(2, 1, 10, 7);
  dataRange1.setVerticalAlignment("middle");
  dataRange1.setBorder(true, true, true, true, true, true, "#D3D3D3", SpreadsheetApp.BorderStyle.SOLID);
  sheet1.getRange(2, 2, 10, 2).setHorizontalAlignment("center");
  sheet1.getRange(2, 7, 10, 1).setHorizontalAlignment("center");

  // Conditional formatting for Priority
  var priorityRange1 = sheet1.getRange("G2:G11");
  var rules1 = [];
  rules1.push(SpreadsheetApp.newConditionalFormatRule().whenTextEqualTo("HIGH").setBackground("#B7E1CD").setFontColor("#0D652D").setBold(true).setRanges([priorityRange1]).build());
  rules1.push(SpreadsheetApp.newConditionalFormatRule().whenTextEqualTo("MEDIUM").setBackground("#FCE8B2").setFontColor("#7F6003").setBold(true).setRanges([priorityRange1]).build());
  rules1.push(SpreadsheetApp.newConditionalFormatRule().whenTextEqualTo("LOW").setBackground("#F4C7C3").setFontColor("#A93226").setBold(true).setRanges([priorityRange1]).build());
  sheet1.setConditionalFormatRules(rules1);

  // Column widths (skip autoResize to save time)
  sheet1.setColumnWidth(1, 180);
  sheet1.setColumnWidth(2, 100);
  sheet1.setColumnWidth(3, 90);
  sheet1.setColumnWidth(4, 300);
  sheet1.setColumnWidth(5, 300);
  sheet1.setColumnWidth(6, 300);
  sheet1.setColumnWidth(7, 150);
  sheet1.setFrozenRows(1);

  SpreadsheetApp.flush();

  // === SHEET 2: Niche Detail ===
  var sheet2 = ss.insertSheet("Niche Detail");

  var allData2 = [
    ["Industry", "Niche", "Frequency", "Tools Recommended", "Complexity", "Est. Build Time"],
    ["HR & Recruitment", "Resume screening & ATS integration", 52, "n8n, OpenAI, Greenhouse API", "Medium", "5 days"],
    ["HR & Recruitment", "Onboarding workflow automation", 34, "n8n, Google Workspace, Slack", "Low", "3 days"],
    ["HR & Recruitment", "Payroll & job posting distribution", 28, "n8n, Gusto API, Indeed API", "Medium", "4 days"],
    ["Tech & IT", "CI/CD pipelines & cloud infrastructure", 45, "n8n, GitHub Actions, AWS", "High", "7 days"],
    ["Tech & IT", "Monitoring, alerts & API integrations", 38, "n8n, PagerDuty, Datadog", "Medium", "5 days"],
    ["Tech & IT", "Helpdesk automation", 29, "n8n, Zendesk, Slack", "Low", "3 days"],
    ["Marketing & Growth", "Social scheduling & lead nurture", 41, "n8n, Buffer, HubSpot", "Low", "3 days"],
    ["Marketing & Growth", "Email sequences & reporting dashboards", 35, "n8n, Mailchimp, Google Sheets", "Medium", "4 days"],
    ["Marketing & Growth", "Content repurposing workflows", 22, "n8n, OpenAI, Canva API", "Medium", "5 days"],
    ["Finance & Accounting", "Invoice processing & expense categorization", 36, "n8n, QuickBooks, OpenAI", "Medium", "5 days"],
    ["Finance & Accounting", "Bank reconciliation & financial reporting", 28, "n8n, Plaid, Google Sheets", "High", "6 days"],
    ["Finance & Accounting", "Accounts receivable follow-up", 19, "n8n, Stripe, Gmail", "Low", "3 days"],
    ["Legal", "Contract review & NDA routing", 25, "n8n, DocuSign, OpenAI", "High", "7 days"],
    ["Legal", "Deadline tracking & client intake", 20, "n8n, Clio, Google Calendar", "Low", "3 days"],
    ["Legal", "Legal research automation", 14, "n8n, OpenAI, Notion", "Medium", "5 days"],
    ["Construction", "Project status tracking & permit filing", 22, "n8n, Procore, Google Sheets", "Medium", "5 days"],
    ["Construction", "Subcontractor coordination & bid automation", 18, "n8n, PlanGrid, Gmail", "Medium", "4 days"],
    ["Construction", "Safety compliance workflows", 12, "n8n, Google Forms, Slack", "Low", "3 days"],
    ["Electrical & Trades", "Job quoting & compliance scheduling", 20, "n8n, ServiceTitan, Google Sheets", "Medium", "4 days"],
    ["Electrical & Trades", "Inventory tracking & digital job cards", 16, "n8n, Airtable, Google Sheets", "Low", "3 days"],
    ["Electrical & Trades", "Dispatch & scheduling automation", 13, "n8n, Google Calendar, Twilio", "Medium", "4 days"],
    ["Healthcare", "Appointment reminders & patient intake", 19, "n8n, Twilio, Google Forms", "Low", "3 days"],
    ["Healthcare", "Medical billing & referral tracking", 15, "n8n, DrChrono API, QuickBooks", "High", "6 days"],
    ["Healthcare", "Staff scheduling automation", 11, "n8n, Google Calendar, Slack", "Low", "3 days"],
    ["eCommerce", "Order management & inventory sync", 28, "n8n, Shopify, ShipStation", "Medium", "5 days"],
    ["eCommerce", "Return processing & review responses", 18, "n8n, Shopify, OpenAI", "Medium", "4 days"],
    ["eCommerce", "Abandoned cart recovery", 14, "n8n, Shopify, Mailchimp", "Low", "3 days"],
    ["Real Estate", "Lead follow-up & listing syndication", 18, "n8n, Zillow API, Mailchimp", "Medium", "4 days"],
    ["Real Estate", "Document signing & CRM pipeline", 14, "n8n, DocuSign, HubSpot", "Medium", "5 days"],
    ["Real Estate", "Open house follow-up automation", 10, "n8n, Google Forms, Gmail", "Low", "2 days"]
  ];

  // Write all data at once
  sheet2.getRange(1, 1, allData2.length, 6).setValues(allData2);

  // Batch background colors - header + industry group alternating
  var bgColors2 = [];
  bgColors2.push(["#032E42","#032E42","#032E42","#032E42","#032E42","#032E42"]);
  var lastInd = "";
  var toggle = false;
  for (var i = 1; i < allData2.length; i++) {
    if (allData2[i][0] !== lastInd) {
      toggle = !toggle;
      lastInd = allData2[i][0];
    }
    if (toggle) {
      bgColors2.push(["#F8F9FA","#F8F9FA","#F8F9FA","#F8F9FA","#F8F9FA","#F8F9FA"]);
    } else {
      bgColors2.push([null,null,null,null,null,null]);
    }
  }
  sheet2.getRange(1, 1, allData2.length, 6).setBackgrounds(bgColors2);

  // Batch font colors
  var fontColors2 = [];
  fontColors2.push(["#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF"]);
  for (var i = 1; i < allData2.length; i++) {
    fontColors2.push([null,null,null,null,null,null]);
  }
  sheet2.getRange(1, 1, allData2.length, 6).setFontColors(fontColors2);

  // Batch font weights
  var fontWeights2 = [];
  fontWeights2.push(["bold","bold","bold","bold","bold","bold"]);
  for (var i = 1; i < allData2.length; i++) {
    fontWeights2.push(["normal","normal","normal","normal","normal","normal"]);
  }
  sheet2.getRange(1, 1, allData2.length, 6).setFontWeights(fontWeights2);

  // Header formatting
  var headerRange2 = sheet2.getRange(1, 1, 1, 6);
  headerRange2.setFontSize(11);
  headerRange2.setHorizontalAlignment("center");
  headerRange2.setVerticalAlignment("middle");
  headerRange2.setWrap(true);
  sheet2.setRowHeight(1, 40);

  // Data area formatting
  var dataRange2 = sheet2.getRange(2, 1, 30, 6);
  dataRange2.setVerticalAlignment("middle");
  dataRange2.setBorder(true, true, true, true, true, true, "#D3D3D3", SpreadsheetApp.BorderStyle.SOLID);
  sheet2.getRange(2, 3, 30, 1).setHorizontalAlignment("center");
  sheet2.getRange(2, 5, 30, 2).setHorizontalAlignment("center");

  // Conditional formatting for Complexity
  var complexityRange = sheet2.getRange("E2:E31");
  var rules2 = [];
  rules2.push(SpreadsheetApp.newConditionalFormatRule().whenTextEqualTo("High").setBackground("#F4C7C3").setFontColor("#A93226").setBold(true).setRanges([complexityRange]).build());
  rules2.push(SpreadsheetApp.newConditionalFormatRule().whenTextEqualTo("Medium").setBackground("#FCE8B2").setFontColor("#7F6003").setBold(true).setRanges([complexityRange]).build());
  rules2.push(SpreadsheetApp.newConditionalFormatRule().whenTextEqualTo("Low").setBackground("#B7E1CD").setFontColor("#0D652D").setBold(true).setRanges([complexityRange]).build());
  sheet2.setConditionalFormatRules(rules2);

  // Column widths (skip autoResize to save time)
  sheet2.setColumnWidth(1, 180);
  sheet2.setColumnWidth(2, 340);
  sheet2.setColumnWidth(3, 90);
  sheet2.setColumnWidth(4, 300);
  sheet2.setColumnWidth(5, 100);
  sheet2.setColumnWidth(6, 120);
  sheet2.setFrozenRows(1);

  // Go back to Sheet 1
  ss.setActiveSheet(sheet1);
}
