// Check email breach using HaveIBeenPwned API
async function checkBreach() {
  const email = document.getElementById("emailInput").value;
  const result = document.getElementById("breachResult");

  if (!email) {
    result.textContent = "Please enter an email.";
    return;
  }

  result.textContent = "Checking...";

  try {
    // Use a proxy or backend for real API; demo with placeholder
    // Real endpoint: https://haveibeenpwned.com/api/v3/breachedaccount/{email}
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    if (response.ok) {
      const data = await response.json();
      result.textContent = `No breach found for: ${email} (Demo data)`;
    } else {
      result.textContent = `Possible breach found for: ${email}`;
    }
  } catch (error) {
    result.textContent = "Error checking breach.";
  }
}

// Load latest threats (static demo data)
const threats = [
  "Critical Ransomware Alert: LockBit variant spreading",
  "Zero-day vulnerability in Chrome detected",
  "Phishing campaign targeting financial institutions"
];

const threatList = document.getElementById("threatList");
threats.forEach(t => {
  const li = document.createElement("li");
  li.textContent = t;
  threatList.appendChild(li);
});
