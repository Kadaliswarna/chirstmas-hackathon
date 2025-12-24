// 😈 CHRISTMAS DEEP BURN ROAST MAP
const roastMap = [
  {
    keys: ["serious", "this time"],
    roasts: [
      "You say you’re serious like Santa hasn’t heard this lie before.",
      "This time is serious — Santa added it to your Naughty List."
    ]
  },
  {
    keys: ["finish", "complete", "done"],
    roasts: [
      "You talk about finishing like talking burns calories.",
      "Even the task stopped believing in you."
    ]
  },
  {
    keys: ["study", "exam", "test"],
    roasts: [
      "Your study plan is keeping the book under your pillow and praying to Santa.",
      "You’re revising vibes, not syllabus."
    ]
  },
  {
    keys: ["code", "coding", "programming", "project", "hackathon"],
    roasts: [
      "Your code is 10% logic and 90% Christmas miracles.",
      "You go to hackathons for snacks and festive vibes."
    ]
  },
  {
    keys: ["success", "money", "rich", "billionaire"],
    roasts: [
      "You want success, but effort went on Christmas vacation.",
      "You’re manifesting wealth while avoiding work."
    ]
  },
  {
    keys: ["sleep", "tired", "bed"],
    roasts: [
      "You aren’t tired — you’re professionally lazy.",
      "Your bed knows your goals better than you do."
    ]
  },
  {
    keys: ["tomorrow", "later", "monday"],
    roasts: [
      "Tomorrow is Santa’s favorite excuse too.",
      "Your ‘tomorrow’ is fully booked with excuses."
    ]
  },
  {
    keys: ["forget", "forgot", "memory"],
    roasts: [
      "You didn't forget. You just didn’t care enough.",
      "Your memory isn’t bad — your priorities are.",
      "You only forget things that require effort."
    ]
  },
  {
    keys: ["lazy", "laziness", "sloth"],
    roasts: [
      "You aren't resting. You've been resting for years.",
      "If laziness was an Olympic sport, you'd win gold.",
      "You're a background character in your own life."
    ]
  },
  {
    keys: ["not hungry", "skip meal", "not eating", "diet", "food", "calories"],
    roasts: [
      "You're not hungry now, but midnight snacks know the truth.",
      "Skipping meals isn't discipline. It's chaos.",
      "Your self-control disappears when food shows up."
    ]
  },
  {
    keys: ["beautiful", "pretty", "handsome", "looks"],
    roasts: [
      "Being beautiful won't finish your work.",
      "You polish your looks and ignore your goals.",
      "Your ego is loud. Your results are silent."
    ]
  },
  {
    keys: ["smart", "intelligent", "genius", "iq"],
    roasts: [
      "Being smart means nothing if you do nothing.",
      "Potential is just unfinished effort.",
      "You talk like a genius but act like a failure."
    ]
  },
  {
    keys: ["time", "wasting time", "deadtime"],
    roasts: [
      "You call it wasting time like it isn’t your full-time job.",
      "Your potential is dying minute by minute.",
      "Time is moving. You are not."
    ]
  },
  {
    keys: ["weekend", "saturday", "sunday"],
    roasts: [
      "Your weekend catch-up is just scrolling and Sunday panic.",
      "You wait all week for the weekend just to do nothing.",
      "You treat every weekend like early retirement.",
      "Saturday is chilling, Sunday is resting — when do you work?"
    ]
  },
  {
    keys: ["holiday", "vacation", "break", "trip"],
    roasts: [
      "You’ve been on holiday from your goals for years.",
      "Holidays are for people who actually worked.",
      "Your life is one big vacation from discipline.",
      "Your potential didn’t get invited to this holiday."
    ]
  }
];

// 💀 DEEP BURNS
const deepBurns = [
  "Santa checked your effort level and left disappointment.",
  "Main character dreams, background elf execution.",
  "You talk big, but your actions whisper excuses.",
  "Your motivation is seasonal and expired.",
  "You are the reason productivity apps exist."
];

// 🎄 EMOJIS & SNOW
const emojis = ["🎄", "🎅", "🔥", "💀", "😈", "❄️"];
const snowIcons = ["❄️", "🎄", "✨"];

// 📊 STATE
let roastCount = 0;
const stats = {};

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// 🔥 ROAST FUNCTION
function roast() {
  const taskInput = document.getElementById("task");
  const result = document.getElementById("result");
  const task = taskInput.value.trim().toLowerCase();

  if (!task) {
    result.innerHTML = "Type something — Santa hates empty excuses 🎅";
    return;
  }

  roastCount++;

  let selectedRoast = "";
  let category = "Deep Burn";
  let isDeepBurn = true;

  for (let block of roastMap) {
    if (block.keys.some(k => task.includes(k))) {
      selectedRoast = randomItem(block.roasts);
      category = block.keys[0];
      isDeepBurn = false;
      break;
    }
  }

  if (!selectedRoast) {
    selectedRoast = randomItem(deepBurns);
  }

  // 🔥 INTENSITY (safe if slider not present)
  const intensityEl = document.getElementById("intensity");
  const intensity = intensityEl ? intensityEl.value : "2";

  if (intensity === "1") selectedRoast += " 😌";
  if (intensity === "3") selectedRoast = "💀 " + selectedRoast.toUpperCase();

  // 📊 STATS
  stats[category] = (stats[category] || 0) + 1;

  result.classList.remove("deep-burn-active");
  if (isDeepBurn || intensity === "3") result.classList.add("deep-burn-active");

  result.innerHTML = `
    ${isDeepBurn
      ? "💀 <b>NAUGHTY LIST ACTIVATED</b><br><small>Santa is disappointed 🎅</small>"
      : "🔥 <b>Roast Mode</b>"
    }<br><br>
    "${selectedRoast}" ${randomItem(emojis)}
    <br><small>🔥 Roasted ${roastCount} times</small>
  `;
}

// 📤 SHARE / COPY ROAST
function shareRoast() {
  const text = document.getElementById("result").innerText;
  navigator.clipboard.writeText(text);
  alert("🔥 Roast copied! Share wisely 😈");
}

// ⌨️ ENTER KEY SUPPORT
document.getElementById("task").addEventListener("keydown", e => {
  if (e.key === "Enter") roast();
});

// 🌗 MODE TOGGLE
function toggleMode() {
  document.body.classList.toggle("light");
}

// ❄️ SNOW EFFECT
function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.className = "snowflake";
  snowflake.innerText = randomItem(snowIcons);
  snowflake.style.left = Math.random() * window.innerWidth + "px";
  snowflake.style.fontSize = (12 + Math.random() * 22) + "px";
  snowflake.style.animationDuration = (3 + Math.random() * 5) + "s";
  document.body.appendChild(snowflake);
  setTimeout(() => snowflake.remove(), 8000);
}

setInterval(createSnowflake, 300);
