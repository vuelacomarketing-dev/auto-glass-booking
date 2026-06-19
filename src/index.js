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
      margin-bottom: 56px;
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

    .card {
      background: rgba(255,255,255,.94);
      border: 1px solid rgba(17,24,39,.08);
      border-radius: 30px;
      padding: 34px;
      box-shadow: 0 24px 60px rgba(15,23,42,.10);
    }

    .question {
      display: flex;
      align-items: end;
      justify-content: space-between;
      gap: 20px;
      margin-bottom: 22px;
    }

    h2 {
      margin: 0;
      font-size: 26px;
      letter-spacing: -.4px;
    }

    .hint {
      color: #6b7280;
      font-size: 14px;
      margin: 6px 0 0;
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

    @media (max-width: 700px) {
      body {
        padding: 18px;
      }

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

      h1 {
        font-size: 36px;
      }

      .hero p {
        font-size: 16px;
      }

      .card {
        padding: 22px;
        border-radius: 24px;
      }

      .question {
        display: block;
      }

      .grid {
        grid-template-columns: 1fr;
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
          (817) 298-0078
      </a>
    </header>

    <section class="hero">
      <h1>Let's get your glass repaired.</h1>
      <p>Answer a few quick questions to receive an estimate and choose whether to book online or call to schedule.</p>
    </section>

    <main class="card">
      <div class="question">
        <div>
          <h2>What service do you need?</h2>
          <p class="hint">Choose the option that best matches your auto glass issue.</p>
        </div>
      </div>

      <div class="grid">
        <button class="service">
          <strong>Windshield Replacement</strong>
          <span>Cracked or damaged windshield requiring replacement.</span>
        </button>

        <button class="service">
          <strong>Windshield Repair</strong>
          <span>Small chips and minor damage that may be repairable.</span>
        </button>

        <button class="service">
          <strong>Door Glass</strong>
          <span>Driver or passenger side window replacement.</span>
        </button>

        <button class="service">
          <strong>Back Glass</strong>
          <span>Rear window replacement service.</span>
        </button>

        <button class="service">
          <strong>Quarter Glass</strong>
          <span>Small rear side window replacement.</span>
        </button>

        <button class="service">
          <strong>ADAS Calibration</strong>
          <span>Calibration for vehicle cameras and safety systems.</span>
        </button>
      </div>
    </main>

  </div>
</body>
</html>
`;

    return new Response(html, {
      headers: { "content-type": "text/html;charset=UTF-8" },
    });
  },
};
