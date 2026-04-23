// Mock medical analysis function (using pattern matching instead of API)
function getMockAnalysis(text) {
  // Extract key metrics from the text
  const findings = [];
  const conditions = [];
  let urgency = 'routine';

  // Search for common medical metrics
  const patterns = [
    { regex: /HbA1c\s*[:=]?\s*([\d.]+)%?/i, label: 'HbA1c', normal: '< 5.7%', high: true },
    { regex: /glucose\s*[:=]?\s*([\d.]+)\s*(mg|mmol)/i, label: 'Blood Glucose', normal: '70-99 mg/dL', high: true },
    { regex: /creatinine\s*[:=]?\s*([\d.]+)/i, label: 'Creatinine', normal: '0.7-1.2 mg/dL', high: true },
    { regex: /WBC\s*[:=]?\s*([\d.]+)/i, label: 'WBC (White Blood Cells)', normal: '4.5-11.0 K/uL' },
    { regex: /hemoglobin\s*[:=]?\s*([\d.]+)/i, label: 'Hemoglobin', normal: '13.5-17.5 g/dL (M)', low: true },
    { regex: /blood pressure\s*[:=]?\s*(\d+)[\/\-](\d+)/i, label: 'Blood Pressure', normal: '< 120/80 mmHg', high: true },
    { regex: /TSH\s*[:=]?\s*([\d.]+)/i, label: 'TSH', normal: '0.4-4.0 mIU/L' },
    { regex: /ALT\s*[:=]?\s*([\d.]+)/i, label: 'ALT', normal: '7-40 U/L', high: true },
    { regex: /cholesterol\s*[:=]?\s*([\d.]+)/i, label: 'Total Cholesterol', normal: '< 200 mg/dL', high: true },
    { regex: /LDL\s*[:=]?\s*([\d.]+)/i, label: 'LDL Cholesterol', normal: '< 100 mg/dL', high: true },
    { regex: /HDL\s*[:=]?\s*([\d.]+)/i, label: 'HDL Cholesterol', normal: '> 40 mg/dL (M)', low: true },
    { regex: /triglycerides\s*[:=]?\s*([\d.]+)/i, label: 'Triglycerides', normal: '< 150 mg/dL', high: true },
  ];

  // Extract findings
  patterns.forEach(p => {
    const match = text.match(p.regex);
    if (match) {
      const value = match[1];
      const numValue = parseFloat(value);
      
      let status = 'normal';
      let meaning = '';
      
      // Simple logic for status determination
      if (p.label.includes('HbA1c')) {
        if (numValue > 7) status = 'high';
        meaning = 'Indicates average blood sugar control over past 3 months. Higher values suggest less controlled diabetes.';
      } else if (p.label.includes('Blood Glucose')) {
        if (numValue > 125) status = 'high';
        else if (numValue < 70) status = 'low';
        meaning = 'Current blood sugar level. May vary throughout the day.';
      } else if (p.label.includes('Creatinine')) {
        if (numValue > 1.2) status = 'high';
        meaning = 'Indicates kidney function. Higher values may suggest reduced kidney function.';
      } else if (p.label.includes('Blood Pressure')) {
        const systolic = parseInt(match[1]);
        if (systolic > 140) status = 'high';
        meaning = 'Lower is generally better. High BP increases risk of heart disease and stroke.';
        urgency = status === 'high' ? 'soon' : urgency;
      } else if (p.label.includes('Hemoglobin')) {
        if (numValue < 12) status = 'low';
        meaning = 'Oxygen-carrying protein in red blood cells. Low levels may indicate anemia.';
      } else if (p.label.includes('Cholesterol')) {
        if (numValue > 200) status = 'high';
        meaning = 'Total cholesterol level. Higher values increase cardiovascular risk.';
      } else if (p.label.includes('LDL')) {
        if (numValue > 130) status = 'high';
        meaning = '"Bad" cholesterol. Should be as low as possible for heart health.';
      } else if (p.label.includes('HDL')) {
        if (numValue < 40) status = 'low';
        meaning = '"Good" cholesterol. Higher levels are protective for heart health.';
      } else if (p.label.includes('Triglycerides')) {
        if (numValue > 200) status = 'high';
        meaning = 'Fat in the blood. High levels increase cardiovascular risk.';
      } else if (p.label.includes('ALT')) {
        if (numValue > 40) status = 'high';
        meaning = 'Liver enzyme. Elevated levels may indicate liver stress or injury.';
      }
      
      findings.push({
        label: p.label,
        value: value + (p.label.includes('Blood Pressure') ? ' mmHg' : ''),
        status: status,
        meaning: meaning
      });
    }
  });

  // Check for condition keywords
  const conditionPatterns = [
    { regex: /diabetes/i, condition: 'Type 2 Diabetes Mellitus' },
    { regex: /hypertension/i, condition: 'Hypertension (High Blood Pressure)' },
    { regex: /dyslipidemia/i, condition: 'Dyslipidemia (Abnormal Lipid Levels)' },
    { regex: /kidney disease|renal|eGFR/i, condition: 'Chronic Kidney Disease' },
    { regex: /anemia/i, condition: 'Anemia' },
    { regex: /thyroid/i, condition: 'Thyroid Disorder' },
    { regex: /liver|hepatic|fatty liver/i, condition: 'Liver Disease' },
  ];

  conditionPatterns.forEach(p => {
    if (p.regex.test(text)) {
      conditions.push(p.condition);
    }
  });

  // Determine urgency based on findings
  const highCount = findings.filter(f => f.status === 'high').length;
  if (highCount >= 3) urgency = 'urgent';
  else if (highCount >= 2) urgency = 'soon';

  // Generate summary
  let summary = 'Your medical report shows ';
  if (findings.length > 0) {
    const abnormal = findings.filter(f => f.status !== 'normal');
    if (abnormal.length > 0) {
      summary += `${abnormal.length} test results that are outside normal ranges, `;
    } else {
      summary += 'all test results within normal ranges, ';
    }
  }
  if (conditions.length > 0) {
    summary += `with identified conditions including ${conditions.slice(0, 2).join(' and ')}. `;
  }
  summary += 'Review the findings below and consult with your healthcare provider for personalized medical advice.';

  // Generate actions
  const actions = [
    'Schedule an appointment with your primary care physician to discuss these results',
    'Maintain a log of your symptoms and any health changes',
    'Follow any medication or lifestyle recommendations from your doctor',
  ];

  if (urgency === 'urgent') {
    actions.unshift('Contact your healthcare provider immediately or seek urgent care');
  } else if (urgency === 'soon') {
    actions.unshift('Schedule a follow-up appointment with your healthcare provider soon');
  }

  return {
    summary: summary,
    findings: findings.length > 0 ? findings : [
      { label: 'No specific metrics found', value: 'Please ensure the report is in a recognized format', status: 'normal', meaning: 'Try uploading a complete medical report.' }
    ],
    conditions: conditions.length > 0 ? conditions : ['Further evaluation needed'],
    actions: actions,
    urgency: urgency
  };
}

function ev(e, cls) {
  e.preventDefault();
  document.getElementById('upload-zone').className = 'upload-zone ' + cls;
}

function drop(e) {
  e.preventDefault();
  document.getElementById('upload-zone').className = 'upload-zone';
  const f = e.dataTransfer.files[0];
  if (f) readFile(f);
}

function loadFile(e) {
  const f = e.target.files[0];
  if (f) readFile(f);
}

function readFile(f) {
  document.getElementById('fname').textContent = f.name;
  document.getElementById('file-name-badge').style.display = 'inline-flex';
  const reader = new FileReader();
  reader.onload = ev => {
    document.getElementById('report-text').value = ev.target.result.slice(0, 4000);
  };
  reader.readAsText(f);
}

function clearFile() {
  document.getElementById('file-name-badge').style.display = 'none';
  document.getElementById('file-input').value = '';
}

function clearAll() {
  document.getElementById('report-text').value = '';
  document.getElementById('results').innerHTML = '';
  document.getElementById('status').innerHTML = '';
  document.getElementById('disc').style.display = 'none';
  clearFile();
}

function setStatus(msg, spin) {
  document.getElementById('status').innerHTML = spin ? `<div class="spinner"></div><span>${msg}</span>` : `<span>${msg}</span>`;
}

function loadSample() {
  document.getElementById('report-text').value = `Patient: John Doe, Age: 52, Male
Date: April 2026

LABORATORY FINDINGS:
- HbA1c: 8.4% (Normal: <5.7%)
- Fasting Blood Glucose: 186 mg/dL (Normal: 70-99 mg/dL)
- Total Cholesterol: 234 mg/dL (Normal: <200 mg/dL)
- LDL Cholesterol: 158 mg/dL (Normal: <100 mg/dL)
- HDL Cholesterol: 38 mg/dL (Normal: >40 mg/dL)
- Triglycerides: 290 mg/dL (Normal: <150 mg/dL)
- Creatinine: 1.4 mg/dL (Normal: 0.7-1.2 mg/dL)
- eGFR: 58 mL/min/1.73m2 (Normal: >60)
- ALT: 52 U/L (Normal: 7-40 U/L)
- TSH: 3.2 mIU/L (Normal: 0.4-4.0)
- WBC: 7.2 K/uL
- Hemoglobin: 13.1 g/dL

VITALS:
- Blood Pressure: 152/94 mmHg
- BMI: 31.2 (Obese)
- Heart Rate: 82 bpm

IMPRESSION: 
Poorly controlled Type 2 Diabetes Mellitus. Mixed dyslipidemia. Stage 2 hypertension. Mild chronic kidney disease (Stage 3a). Mildly elevated liver enzymes possibly related to fatty liver disease.`;
}

function analyze() {
  const text = document.getElementById('report-text').value.trim();
  if (!text) {
    setStatus('Please paste a medical report first.');
    return;
  }

  const btn = document.getElementById('analyze-btn');
  btn.disabled = true;
  setStatus('Analyzing report...', true);
  document.getElementById('results').innerHTML = '';
  document.getElementById('disc').style.display = 'none';

  // Simulate a small delay for better UX
  setTimeout(() => {
    try {
      const result = getMockAnalysis(text);
      setStatus('✓ Analysis complete');
      renderResults(result);
    } catch (e) {
      setStatus('Error analyzing report. Please try again.');
      console.error(e);
    }
    btn.disabled = false;
  }, 1000);
}

function renderResults(d) {
  const urgencyColor = d.urgency === 'urgent' ? 'badge-red' : d.urgency === 'soon' ? 'badge-amber' : 'badge-teal';
  const urgencyLabel = d.urgency === 'urgent' ? '🔴 Urgent' : d.urgency === 'soon' ? '🟡 See doctor soon' : '🟢 Routine follow-up';

  let findingsHtml = (d.findings || [])
    .map(f => {
      const sc = f.status === 'high' ? 'flag-high' : f.status === 'low' ? 'flag-low' : 'flag-normal';
      const sl = f.status === 'high' ? '↑ High' : f.status === 'low' ? '↓ Low' : f.status === 'borderline' ? '~ Borderline' : '✓ Normal';
      return `<div class="finding-row">
        <span class="finding-label">${escapeHtml(f.label)}</span>
        <span class="finding-val">${escapeHtml(f.value)} <span class="flag ${sc}">${sl}</span><br><span style="color:var(--color-text-secondary);font-size:13px">${escapeHtml(f.meaning)}</span></span>
      </div>`;
    })
    .join('');

  let actionsHtml = (d.actions || []).map(a => `<li><div class="action-dot"></div><span>${escapeHtml(a)}</span></li>`).join('');

  let condHtml = (d.conditions || []).map(c => `<span class="badge badge-blue" style="margin-right:6px;margin-bottom:6px;display:inline-block">${escapeHtml(c)}</span>`).join('');

  document.getElementById('results').innerHTML = `
    <div class="result-card">
      <div class="result-card-header">
        <span class="result-section-title">Plain English Summary</span>
        <span class="badge ${urgencyColor}">${urgencyLabel}</span>
      </div>
      <div class="result-body">
        <p class="summary-text">${escapeHtml(d.summary)}</p>
        ${condHtml ? `<div style="margin-top:12px">${condHtml}</div>` : ''}
      </div>
    </div>
    ${findingsHtml ? `<div class="result-card">
      <div class="result-card-header"><span class="result-section-title">Key Findings Explained</span></div>
      <div class="result-body">${findingsHtml}</div>
    </div>` : ''}
    ${actionsHtml ? `<div class="result-card">
      <div class="result-card-header"><span class="result-section-title">Recommended Next Steps</span></div>
      <div class="result-body"><ul class="action-list">${actionsHtml}</ul></div>
    </div>` : ''}
  `;
  document.getElementById('disc').style.display = 'block';
}

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
