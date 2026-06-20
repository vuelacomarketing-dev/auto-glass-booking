export default {
  async fetch(request) {
    const url = new URL(request.url);

if (url.pathname === "/admin") {
    const html = `
<!DOCTYPE html>
<html>
<head>
  <title>Auto Glass Booking</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  
<style>
  * { box-sizing: border-box; }

  :root {
    --primary-color: #0f766e;
    --primary-dark: #115e59;
    --primary-soft: #e6f5f3;
    --text-color: #111827;
  }

  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: linear-gradient(135deg, #f7f8fb, #edf1f7);
    color: var(--text-color);
    padding: 24px;
  }

  .shell {
    max-width: 1040px;
    margin: 0 auto;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 52px;
    gap: 20px;
  }
  
  .header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

  .logo img {
    max-height: 58px;
    max-width: 210px;
    display: block;
  }

  .call-button,
  .primary {
    background: var(--primary-color);
    color: #fff;
    border: none;
    border-radius: 999px;
    font-weight: 800;
    cursor: pointer;
  }

  .call-button {
    text-decoration: none;
    padding: 13px 20px;
    font-size: 14px;
    white-space: nowrap;
    box-shadow: 0 12px 28px rgba(15, 118, 110, .18);
  }

  .primary {
    margin-top: 8px;
    padding: 16px 22px;
    font-size: 16px;
    width: fit-content;
  }

  .call-button:hover,
  .primary:hover {
    background: var(--primary-dark);
  }

  .hero {
    text-align: center;
    margin-bottom: 34px;
  }

  h1 {
    font-size: 48px;
    line-height: 1.05;
    margin: 0 0 14px;
    letter-spacing: -1.5px;
  }

  .hero p,
  .hint,
  .service span,
  .progress {
    color: #6b7280;
  }

  .hero p {
    font-size: 19px;
    line-height: 1.5;
    margin: 0 auto;
    max-width: 620px;
  }

  .top-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }

  .back {
    border: none;
    background: transparent;
    color: var(--primary-color);
    font-size: 15px;
    cursor: pointer;
    padding: 0;
    font-weight: 800;
  }

  h2 {
    margin: 0;
    font-size: 28px;
    letter-spacing: -.5px;
  }

  .hint {
    font-size: 15px;
    margin: 8px 0 24px;
    line-height: 1.5;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .service {
    border: 1px solid #e5e7eb;
    background: #fff;
    border-radius: 22px;
    padding: 24px;
    text-align: left;
    cursor: pointer;
    transition: .2s ease;
    min-height: 126px;
  }

  .service:hover {
    transform: translateY(-3px);
    border-color: var(--primary-color);
    box-shadow: 0 18px 38px rgba(15, 118, 110, .16);
  }

  .service strong {
    display: block;
    font-size: 19px;
    margin-bottom: 8px;
  }

  .service span {
    font-size: 14px;
    line-height: 1.5;
  }

  .form {
    display: grid;
    gap: 18px;
    max-width: 620px;
  }

  label {
    font-weight: 700;
    font-size: 15px;
    display: block;
    margin-bottom: 8px;
  }

  select,
  input {
    width: 100%;
    padding: 16px;
    border-radius: 16px;
    border: 1px solid #d1d5db;
    font-size: 16px;
    background: white;
  }

  select:focus,
  input:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 4px rgba(15, 118, 110, .12);
  }

  .summary {
    background: var(--primary-soft);
    border: 1px solid rgba(15, 118, 110, .18);
    padding: 14px 16px;
    border-radius: 16px;
    color: var(--primary-dark);
    font-size: 14px;
    margin-bottom: 22px;
    width: fit-content;
  }

  .hidden {
    display: none;
  }

  .calendar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 620px;
    margin: 28px 0 18px;
  }

  .calendar-header button {
    border: none;
    background: white;
    border-radius: 999px;
    width: 42px;
    height: 42px;
    font-size: 28px;
    cursor: pointer;
  }

  .calendar-header button:hover {
    background: var(--primary-soft);
    color: var(--primary-dark);
  }

  .calendar-days,
  .calendar-grid {
    max-width: 620px;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 10px;
  }

  .calendar-days div {
    text-align: center;
    color: #6b7280;
    font-size: 13px;
    font-weight: 800;
  }

  .calendar-date {
    border: none;
    background: var(--primary-soft);
    border-radius: 12px;
    padding: 16px 0;
    font-size: 16px;
    cursor: pointer;
    color: var(--primary-dark);
    font-weight: 800;
  }

  .calendar-date.unavailable {
    background: transparent;
    color: #9ca3af;
    cursor: default;
  }

  .calendar-date.selected {
    background: var(--primary-color);
    color: white;
  }

  .times-area {
    max-width: 620px;
    margin-top: 26px;
    display: grid;
    gap: 12px;
  }

  .time-button {
    border: 1px solid #d1d5db;
    background: white;
    border-radius: 999px;
    padding: 18px;
    font-size: 17px;
    font-weight: 800;
    cursor: pointer;
  }

  .time-button:hover {
    border-color: var(--primary-color);
    color: var(--primary-dark);
  }

  .no-times {
    color: #6b7280;
    background: #f9fafb;
    padding: 16px;
    border-radius: 16px;
  }
.confirmation {
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
}

.success-icon {
  width: 72px;
  height: 72px;
  border-radius: 999px;
  background: var(--primary-soft);
  color: var(--primary-color);
  display: grid;
  place-items: center;
  font-size: 38px;
  font-weight: 900;
  margin: 0 auto 22px;
}

.confirmation-card {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 24px;
  padding: 24px;
  margin: 28px auto;
  text-align: left;
  display: grid;
  gap: 12px;
}

.confirmation-row {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  border-bottom: 1px solid #f3f4f6;
  padding-bottom: 10px;
}

.confirmation-row:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.confirmation-row span {
  color: #6b7280;
}

.confirmation-row strong {
  text-align: right;
}

.summary {
  max-width: 100%;
  overflow-wrap: break-word;
}
.estimate-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.estimate-card {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 26px;
  padding: 26px;
  min-height: 340px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: .2s ease;
}

.estimate-card:hover {
  transform: translateY(-3px);
  border-color: var(--primary-color);
  box-shadow: 0 18px 38px rgba(15, 118, 110, .16);
}

.badge {
  display: inline-block;
  width: fit-content;
  background: var(--primary-soft);
  color: var(--primary-dark);
  border-radius: 999px;
  padding: 7px 12px;
  font-size: 13px;
  font-weight: 800;
  margin-bottom: 16px;
}
.swipe-hint {
  display: none;
  text-align: center;
  color: var(--primary-color);
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 16px;
}
.error-message {
  color: #dc2626;
  font-size: 14px;
  font-weight: 600;
  margin-top: 8px;
}

.input-error {
  border-color: #dc2626 !important;
}

.new-quote-button {
  border: 1px solid var(--primary-color);
  background: transparent;
  color: var(--primary-color);
  padding: 12px 18px;
  border-radius: 999px;
  font-weight: 800;
  cursor: pointer;
}

.new-quote-button:hover {
  background: var(--primary-soft);
}

.progress {
  display: none;
}

@media (max-width: 700px) {

  .confirmation-row {
    display: block;
  }

  .confirmation-row strong {
    display: block;
    text-align: left;
    margin-top: 4px;
  }

  body { padding: 18px; }

  .header { margin-bottom: 38px; }

  .logo img {
    max-height: 46px;
    max-width: 160px;
  }

  .call-button {
    padding: 11px 15px;
    font-size: 13px;
  }

  h1 { font-size: 36px; }

  .hero p { font-size: 16px; }

  .grid {
    grid-template-columns: 1fr;
  }

  .primary {
    width: 100%;
  }

  .calendar-days,
  .calendar-grid {
    gap: 6px;
  }

  .calendar-date {
    padding: 12px 0;
    font-size: 14px;
  }

  /* Estimate Cards Swipe */

  .estimate-grid {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    gap: 16px;
    padding-bottom: 16px;
    -webkit-overflow-scrolling: touch;
  }

  .estimate-card {
    min-width: 100%;
    flex: 0 0 100%;
    scroll-snap-align: center;
  }
  .swipe-hint {
  display: block;
}

}
  </style>

  
</head>
<body>
  <div class="shell">

  <header class="header">
  <a class="logo" id="logoLink" href="#">
    <img
      id="clientLogo"
      src=""
      alt="Client Logo"
      onerror="this.src='https://vuelaco.org/default-logo.png';">
  </a>

  <div class="header-actions">

    <button class="new-quote-button" onclick="startNewQuote()">
      Start New Quote
    </button>

    <a class="call-button" id="callButton" href="#">
      Loading...
    </a>

  </div>

</header>

    <section class="hero">
      <h1>Let's get your glass repaired.</h1>
      <p>Answer a few quick questions to receive an estimate and choose whether to book online or call to schedule.</p>
    </section>

    <main class="card">

      <section id="serviceScreen">
        <h2>What service do you need?</h2>
        <p class="hint">Choose the option that best matches your auto glass issue.</p>

<div id="serviceGrid" class="grid"></div>
      </section>

      <section id="vehicleScreen" class="hidden">
        <div class="top-row">
          <button class="back" onclick="goBack()">← Back</button>
          <div class="progress">Vehicle</div>
        </div>

        <div id="selectedServiceSummary" class="summary"></div>

        <h2>Tell us about your vehicle.</h2>
        <p class="hint">This helps us estimate the right glass option for your vehicle.</p>

        <div class="form">
          <div>
            <label>Year</label>
            <select id="year">
              <option value="">Select year</option>
            </select>
          </div>

          <div>
            <label>Make</label>
            <select id="make">
              <option value="">Select make</option>
              <option>Acura</option>
              <option>Audi</option>
              <option>BMW</option>
              <option>Buick</option>
              <option>Cadillac</option>
              <option>Chevrolet</option>
              <option>Chrysler</option>
              <option>Dodge</option>
              <option>Ford</option>
              <option>GMC</option>
              <option>Honda</option>
              <option>Hyundai</option>
              <option>Jeep</option>
              <option>Kia</option>
              <option>Lexus</option>
              <option>Mazda</option>
              <option>Mercedes-Benz</option>
              <option>Nissan</option>
              <option>Ram</option>
              <option>Subaru</option>
              <option>Tesla</option>
              <option>Toyota</option>
              <option>Volkswagen</option>
            </select>
          </div>

          <div>
            <label>Model</label>
            <input id="model" type="text" placeholder="Example: Camry, F-150, Cherokee" />
          </div>
   <div id="vehicleError" class="error-message"></div>
          <button class="primary" onclick="continueToEstimate()">Continue</button>
        </div>
      </section>

   <section id="estimateScreen" class="hidden">

  <div class="top-row">
    <button class="back" onclick="backToVehicle()">← Back</button>
    <div class="progress">Estimate</div>
  </div>

  <div id="vehicleSummary" class="summary"></div>

  <h2>Your Estimate Options</h2>
  
  <p class="hint">
    Final pricing depends on glass availability, vehicle options,
    OEM requirements, and ADAS calibration needs.
  </p>

  <p class="swipe-hint">
  ← Swipe to view all options →
</p>

<div id="estimateGrid" class="estimate-grid"></div>

</section>

<section id="serviceTypeScreen" class="hidden">
  <div class="top-row">
    <button class="back" onclick="backToEstimate()">← Back</button>
    <div class="progress">Service Type</div>
  </div>

  <div id="estimateSummary" class="summary"></div>

  <h2>How would you like service?</h2>
  <p class="hint">Choose whether you prefer mobile service or an in-shop appointment.</p>
    <div id="serviceTypeGrid" class="grid"></div>
  </div>
</section>

<section id="zipScreen" class="hidden">
  <div class="top-row">
    <button class="back" onclick="backToServiceType()">← Back</button>
    <div class="progress">Location</div>
  </div>

  <div id="zipSummary" class="summary"></div>

  <h2>Where do you need service?</h2>
  <p class="hint">Enter the ZIP code for your mobile service location or preferred shop area.</p>

  <div class="form">
    <div>
      <label>ZIP Code</label>
      <input id="zipCode" type="text" placeholder="Example: 75001" maxlength="5" />
    </div>
<div id="zipError" class="error-message"></div>
    <button class="primary" onclick="continueToDate()">Continue</button>
  </div>
</section>

<section id="dateScreen" class="hidden">
  <div class="top-row">
    <button class="back" onclick="backToZip()">← Back</button>
    <div class="progress">Schedule</div>
  </div>

  <div id="dateSummary" class="summary"></div>

  <h2>Choose a date and time.</h2>
  <p class="hint">Select an available date to see appointment times.</p>
<div class="calendar-header">
  <button onclick="changeMonth(-1)">‹</button>
  <h3 id="calendarMonth"></h3>
  <button onclick="changeMonth(1)">›</button>
</div>

<div class="calendar-days">
  <div>SUN</div>
  <div>MON</div>
  <div>TUE</div>
  <div>WED</div>
  <div>THU</div>
  <div>FRI</div>
  <div>SAT</div>
</div>

<div id="calendarGrid" class="calendar-grid"></div>

<div id="timesArea" class="times-area"></div>
</section>

<section id="contactScreen" class="hidden">
  <div class="top-row">
    <button class="back" onclick="backToDate()">← Back</button>
    <div class="progress">Contact</div>
  </div>

  <div id="contactSummary" class="summary"></div>

  <h2>Almost done.</h2>
  <p class="hint">Enter your contact information so the shop can confirm your appointment.</p>

  <div class="form">
    <div>
      <label>First Name*</label>
      <input id="firstName" type="text" placeholder="First name" />
    </div>

    <div>
      <label>Last Name*</label>
      <input id="lastName" type="text" placeholder="Last name" />
    </div>

    <div>
      <label>Phone*</label>
      <input id="phone" type="tel" placeholder="Phone number" />
    </div>

    <div>
      <label>Email*</label>
      <input id="email" type="email" placeholder="Email address" />
    </div>
<div id="contactError" class="error-message"></div>
    <button class="primary" onclick="confirmAppointment()">Confirm Appointment</button>
  </div>
</section>

<section id="confirmationScreen" class="hidden">
  <div class="confirmation">
    <div class="success-icon">✓</div>

    <h2>Appointment Request Received</h2>

    <p class="hint">
      We’ll get in touch to confirm your appointment details.
    </p>

    <div id="finalSummary" class="confirmation-card"></div>

    <p class="hint">
      Need immediate help?
    </p>

    <a class="call-button" href="tel:8172980078">
      Call (817) 298-0078
    </a>
  </div>
</section>

    </main>

  </div>

  
<script>
const clientConfig = {
  clientId: "demo",
  name: "VUELA Demo",
  phone: "(541) 799-0965",
  phoneLink: "5417990965",
  websiteUrl: "https://vuelaco.org/",
  logoUrl: "https://assets.cdn.filesafe.space/oDHddaGyLHDBSkHwMRDF/media/68ceb81099621fe67de20a25.png",
  primaryColor: "#0f766e",
  primaryDark: "#115e59",
primarySoft: "#e6f5f3",
services: [
  {
    id: "windshield_replacement",
    title: "Windshield Replacement",
    description: "Cracked or damaged windshield requiring replacement.",
    active: true
  },
  {
    id: "windshield_repair",
    title: "Windshield Repair",
    description: "Small chips and minor damage that may be repairable.",
    active: true
  },
  {
    id: "door_glass",
    title: "Door Glass",
    description: "Driver or passenger side window replacement.",
    active: true
  },
  {
    id: "back_glass",
    title: "Back Glass",
    description: "Rear window replacement service.",
    active: true
  },
  {
    id: "quarter_glass",
    title: "Quarter Glass",
    description: "Small rear side window replacement.",
    active: true
  },
  {
    id: "adas_calibration",
    title: "ADAS Calibration",
    description: "Calibration for vehicle cameras and safety systems.",
    active: true
  },
  {
    id: "sunroof_glass",
    title: "Sunroof Glass",
    description: "Sunroof and moonroof glass replacement.",
    active: true
  },
  {
    id: "vent_glass",
    title: "Vent Glass",
    description: "Small side vent glass replacement.",
    active: true
  }
],

serviceTypes: [
  {
    title: "Mobile Service",
    description: "We come to your location."
  },
  {
    title: "In-Shop Service",
    description: "Bring your vehicle to our shop."
  }
],

estimateOptions: [
  {
    badge: "Most Popular",
    title: "Aftermarket Glass",
    description: "High quality replacement glass that meets safety standards.",
    priceRange: "$375 - $425"
  },
  {
    badge: "Factory Match",
    title: "OEM Glass",
    description: "Manufactured to the same specifications as your original glass.",
    priceRange: "$525 - $675"
  },
  {
    badge: "Recommended",
    title: "ADAS Package",
    description: "Includes calibration for cameras and advanced safety systems.",
    priceRange: "$625 - $850"
  }
],

slotDurationMinutes: 60,
bufferMinutes: 15,
maxDaysOut: 40,

businessHours: {
  sunday: {
    open: false,
    start: "",
    end: ""
  },
  monday: {
    open: true,
    start: "08:00",
    end: "17:00"
  },
  tuesday: {
    open: true,
    start: "08:00",
    end: "17:00"
  },
  wednesday: {
    open: true,
    start: "08:00",
    end: "17:00"
  },
  thursday: {
    open: true,
    start: "08:00",
    end: "17:00"
  },
  friday: {
    open: true,
    start: "08:00",
    end: "17:00"
  },
  saturday: {
    open: true,
    start: "09:00",
    end: "14:00"
  }
},

blockedDates: [
  "2026-07-04"
],
customAvailability: {
  "2026-07-03": [
    "8:00 AM",
    "9:00 AM",
    "10:00 AM"
  ]
},
  webhookUrl: "https://webhook.site/1712bd1e-b596-41d3-83ec-3e5b5018c05a",
  redirectSeconds: 20
};

document.getElementById("logoLink").href =
  clientConfig.websiteUrl;
document.getElementById("clientLogo").src =
  clientConfig.logoUrl;
document.getElementById("clientLogo").alt =
  clientConfig.name + " Logo";
document.getElementById("callButton").href =
  "tel:" + clientConfig.phoneLink;
document.getElementById("callButton").textContent =
  clientConfig.phone;
document.documentElement.style.setProperty("--primary-color", clientConfig.primaryColor);
document.documentElement.style.setProperty("--primary-dark", clientConfig.primaryDark);
document.documentElement.style.setProperty("--primary-soft", clientConfig.primarySoft);
renderEstimateOptions();
renderServices();
renderServiceTypes();
  
  let selectedService = "";
  let selectedEstimate = "";
  let selectedServiceType = "";
  let selectedZip = "";
  let selectedDate = "";
  let selectedTime = "";
  let vehicleYear = "";
let vehicleMake = "";
let vehicleModel = "";

  const yearSelect = document.getElementById("year");
  const currentYear = new Date().getFullYear();

  for (let year = currentYear + 1; year >= 1990; year--) {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    yearSelect.appendChild(option);
  }

  function generateTimesForDate(dateKey) {
  if (clientConfig.blockedDates.includes(dateKey)) {
  return [];
}

if (clientConfig.customAvailability[dateKey]) {
  return clientConfig.customAvailability[dateKey];
}
  const date = new Date(dateKey + "T00:00:00");
  const dayNames = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
  ];

  const dayName = dayNames[date.getDay()];
  const hours = clientConfig.businessHours[dayName];

  if (!hours || hours.open === false) {
    return [];
  }

  const interval =
    clientConfig.slotDurationMinutes + clientConfig.bufferMinutes;

  const times = [];

  let current = timeToMinutes(hours.start);
  const end = timeToMinutes(hours.end);

  while (current + clientConfig.slotDurationMinutes <= end) {
    times.push(minutesToDisplayTime(current));
    current += interval;
  }

  return times;
}

function timeToMinutes(time) {
  const parts = time.split(":");
  return Number(parts[0]) * 60 + Number(parts[1]);
}

function minutesToDisplayTime(minutes) {
  let hour = Math.floor(minutes / 60);
  const minute = minutes % 60;

  const ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12;
  if (hour === 0) hour = 12;

  return hour + ":" + String(minute).padStart(2, "0") + " " + ampm;
}

const today = new Date();

let calendarMonth = today.getMonth();
let calendarYear = today.getFullYear();

  function selectService(service) {
    selectedService = service;
    document.getElementById("serviceScreen").classList.add("hidden");
    document.getElementById("vehicleScreen").classList.remove("hidden");
    document.getElementById("selectedServiceSummary").textContent = service;
  }
  
function renderServices() {
  const grid = document.getElementById("serviceGrid");

  grid.innerHTML = "";

  clientConfig.services.forEach(function(service) {

    if (service.active === false) {
      return;
    }

    grid.innerHTML +=
      '<button class="service" onclick="selectService(&quot;' + service.title + '&quot;)">' +
        '<strong>' + service.title + '</strong>' +
        '<span>' + service.description + '</span>' +
      '</button>';

  });
}
  function goBack() {
    document.getElementById("vehicleScreen").classList.add("hidden");
    document.getElementById("serviceScreen").classList.remove("hidden");
  }

  function backToVehicle() {
    document.getElementById("estimateScreen").classList.add("hidden");
    document.getElementById("vehicleScreen").classList.remove("hidden");
  }

  function continueToEstimate() {
    const year = document.getElementById("year").value;
    const make = document.getElementById("make").value;
    const model = document.getElementById("model").value;

    
  document.getElementById("vehicleError").textContent = "";

  if (!year || !make || !model) {
    document.getElementById("vehicleError").textContent =
      "Please enter your year, make, and model.";
    return;
  }
  
vehicleYear = year;
vehicleMake = make;
vehicleModel = model;

    document.getElementById("vehicleScreen").classList.add("hidden");
    document.getElementById("estimateScreen").classList.remove("hidden");

    document.getElementById("vehicleSummary").textContent =
      selectedService + " • " + year + " " + make + " " + model;
  }

  function selectEstimate(estimate) {
    selectedEstimate = estimate;

    document.getElementById("estimateScreen").classList.add("hidden");
    document.getElementById("serviceTypeScreen").classList.remove("hidden");

    document.getElementById("estimateSummary").textContent =
      selectedService + " • " + selectedEstimate;
  }
  
function renderEstimateOptions() {
  const grid = document.getElementById("estimateGrid");

  grid.innerHTML = "";

  clientConfig.estimateOptions.forEach(function(option) {
    grid.innerHTML +=
      '<div class="estimate-card">' +
        '<span class="badge">' + option.badge + '</span>' +
        '<strong>' + option.title + '</strong>' +
        '<span>' + option.description + '</span>' +
        '<br><br>' +
        '<strong>' + option.priceRange + '</strong>' +
        '<br><br>' +
       '<button class="primary" onclick="selectEstimate(&quot;' + option.title + '&quot;)">Select</button>' +
      '</div>';
  });
}

  function backToEstimate() {
    document.getElementById("serviceTypeScreen").classList.add("hidden");
    document.getElementById("estimateScreen").classList.remove("hidden");
  }

  function selectServiceType(type) {
    selectedServiceType = type;

    document.getElementById("serviceTypeScreen").classList.add("hidden");
    document.getElementById("zipScreen").classList.remove("hidden");

    document.getElementById("zipSummary").textContent =
      selectedService + " • " + selectedEstimate + " • " + selectedServiceType;
  }
  
function renderServiceTypes() {
  const grid = document.getElementById("serviceTypeGrid");

  grid.innerHTML = "";

  clientConfig.serviceTypes.forEach(function(type) {

    grid.innerHTML +=
      '<button class="service" onclick="selectServiceType(&quot;' + type.title + '&quot;)">' +
        '<strong>' + type.title + '</strong>' +
        '<span>' + type.description + '</span>' +
      '</button>';

  });
}

  function backToServiceType() {
    document.getElementById("zipScreen").classList.add("hidden");
    document.getElementById("serviceTypeScreen").classList.remove("hidden");
  }

  function continueToDate() {
    const zip = document.getElementById("zipCode").value;
document.getElementById("zipError").textContent = "";

if (!zip) {
  document.getElementById("zipError").textContent =
    "Please enter your ZIP code.";
  return;
}

    selectedZip = zip;

    document.getElementById("zipScreen").classList.add("hidden");
    document.getElementById("dateScreen").classList.remove("hidden");

    document.getElementById("dateSummary").textContent =
      selectedService + " • " + selectedEstimate + " • " + selectedServiceType + " • " + selectedZip;

    renderCalendar();
  }

  function backToZip() {
    document.getElementById("dateScreen").classList.add("hidden");
    document.getElementById("zipScreen").classList.remove("hidden");
  }

  function renderCalendar() {
    const calendarGrid = document.getElementById("calendarGrid");
    const calendarMonthTitle = document.getElementById("calendarMonth");

    calendarGrid.innerHTML = "";

    const monthName = new Date(calendarYear, calendarMonth).toLocaleString("default", {
      month: "long",
      year: "numeric"
    });

    calendarMonthTitle.textContent = monthName;

    const firstDay = new Date(calendarYear, calendarMonth, 1).getDay();
    const daysInMonth = new Date(calendarYear, calendarMonth + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
      const empty = document.createElement("div");
      calendarGrid.appendChild(empty);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dateKey =
        calendarYear + "-" +
        String(calendarMonth + 1).padStart(2, "0") + "-" +
        String(day).padStart(2, "0");

const currentDate = new Date(dateKey + "T00:00:00");
const todayDate = new Date();
todayDate.setHours(0, 0, 0, 0);

const maxDate = new Date(todayDate);
maxDate.setDate(maxDate.getDate() + clientConfig.maxDaysOut);
      const button = document.createElement("button");
      button.className = "calendar-date";
      button.textContent = day;

    if (
  currentDate < todayDate ||
  currentDate > maxDate ||
  generateTimesForDate(dateKey).length === 0
) {
  button.classList.add("unavailable");
  button.disabled = true;
} else {
  button.onclick = function () {
    selectDate(dateKey);
  };
}
      calendarGrid.appendChild(button);
    }
  }

  function changeMonth(direction) {
    calendarMonth += direction;

    if (calendarMonth < 0) {
      calendarMonth = 11;
      calendarYear--;
    }

    if (calendarMonth > 11) {
      calendarMonth = 0;
      calendarYear++;
    }

    document.getElementById("timesArea").innerHTML = "";
    renderCalendar();
  }

  function selectDate(dateKey) {
    selectedDate = dateKey;

   const times = generateTimesForDate(dateKey);
    const timesArea = document.getElementById("timesArea");

    document.querySelectorAll(".calendar-date").forEach(function(button) {
      button.classList.remove("selected");
    });

    event.target.classList.add("selected");

    const readableDate = new Date(dateKey + "T00:00:00").toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric"
    });

    if (times.length === 0) {
      timesArea.innerHTML =
        '<div class="no-times">No available times for ' + readableDate + '. Please choose another date.</div>';
      return;
    }

    timesArea.innerHTML =
      '<h3>Available times for ' + readableDate + '</h3>' +
      times.map(function(time) {
        return '<button class="time-button" onclick="selectTime(&quot;' + time + '&quot;)">' + time + '</button>';
      }).join("");
  }

function selectTime(time) {
  selectedTime = time;

  document.getElementById("dateScreen").classList.add("hidden");
  document.getElementById("contactScreen").classList.remove("hidden");

  document.getElementById("contactSummary").textContent =
    selectedService + " • " +
    selectedEstimate + " • " +
    selectedServiceType + " • " +
    selectedZip + " • " +
    selectedDate + " • " +
    selectedTime;
}

function backToDate() {
  document.getElementById("contactScreen").classList.add("hidden");
  document.getElementById("dateScreen").classList.remove("hidden");
}

function confirmAppointment() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;

 document.getElementById("contactError").textContent = "";

if (!firstName || !lastName || !phone || !email) {
  document.getElementById("contactError").textContent =
    "Please complete all required fields.";
  return;
}
  
const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

  if (!emailPattern.test(email)) {
    document.getElementById("contactError").textContent =
      "Please enter a valid email address.";
    return;
  }
  
const appointmentData = {
  service: selectedService,
  estimate: selectedEstimate,
  serviceType: selectedServiceType,
  vehicleYear,
vehicleMake,
vehicleModel,
  zip: selectedZip,
  date: selectedDate,
  time: selectedTime,
  firstName,
  lastName,
  phone,
  email,
  submittedAt: new Date().toISOString(),
 clientId: clientConfig.clientId,
  schedulerVersion: "1.0"
};

fetch(clientConfig.webhookUrl, {
  method: "POST",
  mode: "no-cors",
  body: JSON.stringify(appointmentData)
})
.then(() => {
  console.log("Webhook sent");
})
.catch(error => {
  console.error("Webhook error:", error);
});
  document.getElementById("contactScreen").classList.add("hidden");
  document.getElementById("confirmationScreen").classList.remove("hidden");

document.getElementById("finalSummary").innerHTML =
  '<div class="confirmation-row"><span>Service</span><strong>' + selectedService + '</strong></div>' +
  '<div class="confirmation-row"><span>Glass Option</span><strong>' + selectedEstimate + '</strong></div>' +
  '<div class="confirmation-row"><span>Appointment Type</span><strong>' + selectedServiceType + '</strong></div>' +
  '<div class="confirmation-row"><span>Vehicle</span><strong>' + vehicleYear + ' ' + vehicleMake + ' ' + vehicleModel + '</strong></div>' +
  '<div class="confirmation-row"><span>Date</span><strong>' + selectedDate + '</strong></div>' +
  '<div class="confirmation-row"><span>Time</span><strong>' + selectedTime + '</strong></div>' +
  '<div class="confirmation-row"><span>Name</span><strong>' + firstName + ' ' + lastName + '</strong></div>' +
  '<div class="confirmation-row"><span>Phone</span><strong>' + phone + '</strong></div>' +
  '<div class="confirmation-row"><span>Email</span><strong>' + email + '</strong></div>';

 
 setTimeout(function () {
  window.location.href = clientConfig.websiteUrl;
}, clientConfig.redirectSeconds * 1000);

}

function startNewQuote() {
  selectedService = "";
  selectedEstimate = "";
  selectedServiceType = "";
  selectedZip = "";
  selectedDate = "";
  selectedTime = "";
  vehicleYear = "";
  vehicleMake = "";
  vehicleModel = "";

  const screens = [
    "serviceScreen",
    "vehicleScreen",
    "estimateScreen",
    "serviceTypeScreen",
    "zipScreen",
    "dateScreen",
    "contactScreen",
    "confirmationScreen"
  ];

  screens.forEach(function(screenId) {
    document.getElementById(screenId).classList.add("hidden");
  });

  document.getElementById("serviceScreen").classList.remove("hidden");

  document.querySelectorAll("input").forEach(function(input) {
    input.value = "";
  });

  document.querySelectorAll("select").forEach(function(select) {
    select.selectedIndex = 0;
  });

  document.querySelectorAll(".summary").forEach(function(summary) {
    summary.textContent = "";
  });

  document.querySelectorAll(".error-message").forEach(function(error) {
    error.textContent = "";
  });

  document.getElementById("timesArea").innerHTML = "";

  window.scrollTo(0, 0);
}
</script>
</body>
</html>
`;

    return new Response(html, {
      headers: { "content-type": "text/html;charset=UTF-8" },
    });
  },
};
