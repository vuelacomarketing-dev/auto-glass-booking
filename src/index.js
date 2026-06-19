export default {
  async fetch(request) {
    const html = `
<!DOCTYPE html>
<html>
<head>
  <title>Auto Glass Booking</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    * { box-sizing: border-box; }

    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: linear-gradient(135deg, #f7f8fb, #edf1f7);
      color: #111827;
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

    .logo img {
      max-height: 58px;
      max-width: 210px;
      display: block;
    }

    .call-button {
      text-decoration: none;
      background: #111827;
      color: #fff;
      padding: 13px 20px;
      border-radius: 999px;
      font-size: 14px;
      font-weight: 700;
      white-space: nowrap;
      box-shadow: 0 12px 28px rgba(17,24,39,.18);
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

    .hero p {
      color: #5b6472;
      font-size: 19px;
      line-height: 1.5;
      margin: 0 auto;
      max-width: 620px;
    }

    .content {
  max-width: 980px;
  margin: 0 auto;
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
      color: #111827;
      font-size: 15px;
      cursor: pointer;
      padding: 0;
      font-weight: 700;
    }

    .progress {
      color: #6b7280;
      font-size: 14px;
    }

    h2 {
      margin: 0;
      font-size: 28px;
      letter-spacing: -.5px;
    }

    .hint {
      color: #6b7280;
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
      border-color: #111827;
      box-shadow: 0 18px 38px rgba(15,23,42,.11);
    }

    .service strong {
      display: block;
      font-size: 19px;
      margin-bottom: 8px;
    }

    .service span {
      color: #6b7280;
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

    select, input {
      width: 100%;
      padding: 16px;
      border-radius: 16px;
      border: 1px solid #d1d5db;
      font-size: 16px;
      background: white;
    }

    select:focus, input:focus {
      outline: none;
      border-color: #111827;
      box-shadow: 0 0 0 4px rgba(17,24,39,.08);
    }

    .primary {
      margin-top: 8px;
      background: #111827;
      color: white;
      border: none;
      padding: 16px 22px;
      border-radius: 999px;
      font-size: 16px;
      font-weight: 800;
      cursor: pointer;
      width: fit-content;
    }

    .summary {
      background: #f9fafb;
      border: 1px solid #e5e7eb;
      padding: 14px 16px;
      border-radius: 16px;
      color: #374151;
      font-size: 14px;
      margin-bottom: 22px;
      width: fit-content;
    }

    .hidden {
      display: none;
    }

    @media (max-width: 700px) {
      body { padding: 18px; }

      .header {
        margin-bottom: 38px;
      }

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

      .card {
        padding: 22px;
        border-radius: 24px;
      }

      .grid {
        grid-template-columns: 1fr;
      }

      .primary {
        width: 100%;
      }
    }
  </style>
</head>
<body>
  <div class="shell">

    <header class="header">
      <div class="logo">
        <img src="https://placehold.co/210x70?text=Client+Logo" alt="Client Logo" />
      </div>

      <a class="call-button" href="tel:8172980078">
        Call (817) 298-0078
      </a>
    </header>

    <section class="hero">
      <h1>Let's get your glass repaired.</h1>
      <p>Answer a few quick questions to receive an estimate and choose whether to book online or call to schedule.</p>
    </section>

    <main class="card">

      <section id="serviceScreen">
        <h2>What service do you need?</h2>
        <p class="hint">Choose the option that best matches your auto glass issue.</p>

        <div class="grid">
          <button class="service" onclick="selectService('Windshield Replacement')">
            <strong>Windshield Replacement</strong>
            <span>Cracked or damaged windshield requiring replacement.</span>
          </button>

          <button class="service" onclick="selectService('Windshield Repair')">
            <strong>Windshield Repair</strong>
            <span>Small chips and minor damage that may be repairable.</span>
          </button>

          <button class="service" onclick="selectService('Door Glass')">
            <strong>Door Glass</strong>
            <span>Driver or passenger side window replacement.</span>
          </button>

          <button class="service" onclick="selectService('Back Glass')">
            <strong>Back Glass</strong>
            <span>Rear window replacement service.</span>
          </button>

          <button class="service" onclick="selectService('Quarter Glass')">
            <strong>Quarter Glass</strong>
            <span>Small rear side window replacement.</span>
          </button>

          <button class="service" onclick="selectService('ADAS Calibration')">
            <strong>ADAS Calibration</strong>
            <span>Calibration for vehicle cameras and safety systems.</span>
          </button>
        </div>
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

  <div class="grid">

    <div class="service">
      <strong>Aftermarket Glass</strong>

      <span>
        High quality replacement glass that meets safety standards.
      </span>

      <br><br>

      <strong>$375 - $425</strong>

      <br><br>

      <button
        class="primary"
        onclick="selectEstimate('Aftermarket Glass')">
        Select
      </button>
    </div>

    <div class="service">
      <strong>OEM Glass</strong>

      <span>
        Manufactured to the same specifications as your original glass.
      </span>

      <br><br>

      <strong>$525 - $675</strong>

      <br><br>

      <button
        class="primary"
        onclick="selectEstimate('OEM Glass')">
        Select
      </button>
    </div>

    <div class="service">
      <strong>ADAS Package</strong>

      <span>
        Includes calibration for cameras and advanced safety systems.
      </span>

      <br><br>

      <strong>$625 - $850</strong>

      <br><br>

      <button
        class="primary"
        onclick="selectEstimate('ADAS Package')">
        Select
      </button>
    </div>

  </div>

</section>

<section id="serviceTypeScreen" class="hidden">
  <div class="top-row">
    <button class="back" onclick="backToEstimate()">← Back</button>
    <div class="progress">Service Type</div>
  </div>

  <div id="estimateSummary" class="summary"></div>

  <h2>How would you like service?</h2>
  <p class="hint">Choose whether you prefer mobile service or an in-shop appointment.</p>

  <div class="grid">
    <button class="service" onclick="selectServiceType('Mobile Service')">
      <strong>Mobile Service</strong>
      <span>We come to your home, workplace, or another approved location.</span>
    </button>

    <button class="service" onclick="selectServiceType('Shop Appointment')">
      <strong>Shop Appointment</strong>
      <span>Bring your vehicle to the shop for your scheduled service.</span>
    </button>
  </div>
</section>

    </main>

  </div>

<script>
let selectedEstimate = "";
  let selectedService = "";

  const yearSelect = document.getElementById("year");
  const currentYear = new Date().getFullYear();

  for (let year = currentYear + 1; year >= 1990; year--) {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    yearSelect.appendChild(option);
  }

  function selectService(service) {
    selectedService = service;

    document.getElementById("serviceScreen").classList.add("hidden");
    document.getElementById("vehicleScreen").classList.remove("hidden");
    document.getElementById("selectedServiceSummary").textContent = service;
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

    if (!year || !make || !model) {
      alert("Please enter your year, make, and model.");
      return;
    }

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

function backToEstimate() {
  document.getElementById("serviceTypeScreen").classList.add("hidden");
  document.getElementById("estimateScreen").classList.remove("hidden");
}

function selectServiceType(type) {
  alert("Next step: ZIP code for " + type);
}

function selectServiceType(type) {
  alert("Selected: " + type);
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
