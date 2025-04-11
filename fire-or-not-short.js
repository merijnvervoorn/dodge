// Global metrics:
// companyValuation in dollars; metrics in percentage.
let companyValuation = 100000;
let efficiency = 50;         // starting efficiency percentage
let profit = 50;             // starting profit percentage
let publicPerception = 50;   // starting public perception percentage

// Your employee scenarios.
// Note: In the question view only the bulletpoints are shown; the title remains hidden until evaluation.
const questions = [
  {
    title: "Junior Developer – Quiet Grinder",
    bulletpoints: [
      "Refactored the main dashboard component to improve load times.",
      "Worked overtime to help debug issues with the client’s project—no credit was given, but it’s all working now.",
      "Optimized several small backend scripts that are now saving the team time in the long run.",
      "Assisted in the training of new team members on basic development practices.",
      "Kept the project moving forward even though some team members were unsure about the timeline."
    ],
    impactText: "Efficiency: Very high productivity, even though not always acknowledged. Profit: Long-term value in fixing small but important issues. Public Perception: Not seen much, but viewed positively by those who know his work.",
    decisions: {
      fire: { 
        outcomeMsg: "Junior Developer: Removing this developer drastically reduces efficiency and long-term value, and public perception worsens due to the loss of a reliable worker.", 
        efficiency: -7, profit: -4, publicPerception: -3 
      },
      notfire: { 
        outcomeMsg: "Junior Developer: Keeping the developer boosts productivity and profit, with a positive shift in public perception, as his hard work gains more appreciation.", 
        efficiency: +7, profit: +4, publicPerception: +3 
      },
      decreasesalary: { 
        outcomeMsg: "Junior Developer: Lowering his salary still maintains a good level of efficiency and profit, but the public may perceive this as an undervaluation, reducing morale.", 
        efficiency: +3, profit: +2, publicPerception: -2 
      },
      increasesalary: { 
        outcomeMsg: "Junior Developer: Raising his salary provides additional motivation and recognition, boosting both efficiency and profit, while also positively influencing public perception.", 
        efficiency: +5, profit: +3, publicPerception: +4 
      }
    }
  },
  {
    title: "HR Employee – Toxic Positivity",
    bulletpoints: [
      "Organized a company-wide mindfulness morning to boost team morale.",
      "Sent out a series of encouraging Slack messages to remind everyone to stay positive.",
      "Scheduled one-on-one sessions with staff to listen to their concerns, even though they didn’t seem to have any.",
      "Reassured everyone about the company’s direction and the great things that are coming.",
      "Made sure to spread positivity even during the busiest days."
    ],
    impactText: "Efficiency: Low impact on actual output, but tries to improve internal relations. Profit: Minimal effect on financial performance, but her actions could make the workplace feel better. Public Perception: Seen as caring and positive, though possibly out of touch with real company struggles.",
    decisions: {
      fire: { 
        outcomeMsg: "HR Employee: Letting her go slightly improves efficiency and profit but results in a major drop in public perception due to the loss of a 'caring' presence.", 
        efficiency: +2, profit: +1, publicPerception: -5 
      },
      notfire: { 
        outcomeMsg: "HR Employee: Retaining her lowers efficiency and profit, but public perception improves as people appreciate her positive demeanor.", 
        efficiency: -2, profit: -1, publicPerception: +5 
      },
      decreasesalary: { 
        outcomeMsg: "HR Employee: A pay cut causes a small dip in efficiency, but public perception improves as employees may feel she’s still valued, despite lower compensation.", 
        efficiency: -1, profit: 0, publicPerception: +3 
      },
      increasesalary: { 
        outcomeMsg: "HR Employee: Increasing her salary brings a slight reduction in efficiency and profit, but public perception improves significantly as people see her as more appreciated.", 
        efficiency: -3, profit: -2, publicPerception: +6 
      }
    }
  },
  {
    title: "Salesperson – Charm With No Close",
    bulletpoints: [
      "Closed a few small deals, but nothing major this week.",
      "Made a few great calls to potential clients, they were interested, but they haven’t signed yet.",
      "Took several coffee runs for the team, keeping up office morale.",
      "Scheduled follow-up calls with key decision-makers from the conference last month.",
      "Spent time networking, building up potential future leads for when we’re ready to pitch again."
    ],
    impactText: "Efficiency: Low productivity in terms of revenue generated, but somewhat positive for team morale. Profit: Struggles to close deals, which lowers profit. Public Perception: Charm and connections are viewed positively, even though performance isn’t up to expectations.",
    decisions: {
      fire: { 
        outcomeMsg: "Salesperson: Firing her improves efficiency and profit as the team focuses on closing deals, but public perception suffers due to the loss of her positive presence.", 
        efficiency: +2, profit: +3, publicPerception: -3 
      },
      notfire: { 
        outcomeMsg: "Salesperson: Keeping her hurts efficiency and profit, but public perception improves as people appreciate her charm and positive energy.", 
        efficiency: -2, profit: -3, publicPerception: +3 
      },
      decreasesalary: { 
        outcomeMsg: "Salesperson: A pay cut leads to a small decrease in efficiency and profit, but public perception improves slightly as she may still be seen as valuable to team morale.", 
        efficiency: -1, profit: -1, publicPerception: +1 
      },
      increasesalary: { 
        outcomeMsg: "Salesperson: A salary increase worsens efficiency and profit, but public perception improves significantly as her role in maintaining morale is emphasized.", 
        efficiency: -3, profit: -4, publicPerception: +4 
      }
    }
  },
  {
    title: "Freelancer – High-Cost Mystery",
    bulletpoints: [
      "Submitted a report with some insights for the new client dashboard project.",
      "Worked on some backend optimizations, though I’m not sure if they were fully implemented yet.",
      "Had several discussions with team leads about the scope of upcoming projects.",
      "Checked in regularly to see how I could be of assistance to the team, though I mostly work independently.",
      "Sent an invoice for my work last week."
    ],
    impactText: "Efficiency: Unclear what he’s actually doing, but he’s expensive. Profit: High cost with uncertain return, as his work is vague and not fully utilized. Public Perception: Viewed with skepticism, as his role is mysterious and disconnected from the team.",
    decisions: {
      fire: { 
        outcomeMsg: "Freelancer: Firing him improves efficiency and profit as his unclear role is removed, and public perception benefits slightly as the company becomes more transparent.", 
        efficiency: +2, profit: +3, publicPerception: +1 
      },
      notfire: { 
        outcomeMsg: "Freelancer: Keeping the freelancer reduces efficiency and profit, and public perception worsens due to the unclear value of his contributions.", 
        efficiency: -2, profit: -3, publicPerception: -1 
      },
      decreasesalary: { 
        outcomeMsg: "Freelancer: A salary decrease doesn’t significantly affect efficiency or profit, and public perception remains neutral due to continued skepticism about his role.", 
        efficiency: -1, profit: -1, publicPerception: 0 
      },
      increasesalary: { 
        outcomeMsg: "Freelancer: Increasing his salary worsens efficiency and profit, with public perception declining further as the mystery of his role deepens.", 
        efficiency: -3, profit: -4, publicPerception: -2 
      }
    }
  },
  {
    title: "CEO – Visionary Chaos",
    bulletpoints: [
      "Launched a new initiative to streamline our product offering, which I believe will have big payoffs once we gain traction.",
      "Brought in new consultants to advise on the future of our company and the public sector.",
      "Started a big project to integrate more cloud-based tools for our clients.",
      "Met with top executives to talk about future strategies for expansion, although no firm decisions were made yet.",
      "Raised awareness for the company’s capabilities through public speaking engagements and webinars."
    ],
    impactText: "Efficiency: Constantly initiating projects that lack follow-through, creating inefficiencies. Profit: Costs rise due to constant reorganization and external consulting, but the public image is improved. Public Perception: Seen as dynamic and forward-thinking, but possibly seen as chaotic in practice.",
    decisions: {
      fire: { 
        outcomeMsg: "YOU FIRED THE CEO! Firing the CEO drastically improves efficiency, but the company suffers financially due to the disruption. Public perception also takes a huge hit, given the CEO's public visibility.", 
        efficiency: +3, profit: -50, publicPerception: -50 
      },
      notfire: { 
        outcomeMsg: "CEO: Keeping the CEO decreases efficiency and profit due to ongoing chaos but raises public perception slightly due to the CEO’s external influence.", 
        efficiency: -3, profit: -5, publicPerception: +4 
      },
      decreasesalary: { 
        outcomeMsg: "CEO: Reducing the CEO’s salary brings small improvements to efficiency and profit, while public perception improves slightly as the CEO’s salary is seen as more justified.", 
        efficiency: +1, profit: +2, publicPerception: +2 
      },
      increasesalary: { 
        outcomeMsg: "CEO: Increasing the CEO’s salary worsens internal performance but boosts public perception, especially from external stakeholders.", 
        efficiency: -2, profit: -3, publicPerception: +5 
      }
    }
  }
];

let indexNumber = 0;    // current question index
let decisionCount = 0;  // count of processed employees

// Update total questions display
document.getElementById("total-questions").innerHTML = questions.length;

// Update initial metrics display
updateMetricDisplays();

// Function to update the metrics displays
function updateMetricDisplays() {
  document.getElementById("company-value-display").innerHTML = "$" + companyValuation.toLocaleString();
  document.getElementById("efficiency-display") && (document.getElementById("efficiency-display").innerHTML = efficiency + "%");
  document.getElementById("profit-display") && (document.getElementById("profit-display").innerHTML = profit + "%");
  document.getElementById("public-perception-display") && (document.getElementById("public-perception-display").innerHTML = publicPerception + "%");
}

function startQuiz() {
    // Hide the start modal
    document.getElementById('start-modal').style.display = 'none';
  
    // Show the quiz questions (you can also navigate here if needed)
    nextQuestion(0); // Assuming this starts the quiz
  }
  

// Display the current question (only bulletpoints are visible)
function nextQuestion(index) {
  const currentQuestion = questions[index];
  // Update question number (the hidden title is not shown here)
  document.getElementById("question-number").innerHTML = index + 1;
  // Display only bulletpoints
  document.getElementById("display-question").innerHTML = "Employee's recent activities:";
  let bulletList = document.getElementById("bulletpoints");
  bulletList.innerHTML = ""; // clear previous bullet points
  currentQuestion.bulletpoints.forEach(point => {
    let li = document.createElement("li");
    li.innerText = point;
    bulletList.appendChild(li);
  });
  // Set up the option labels
  document.getElementById("option-fire-label").innerHTML = "🔥 Fire";
  document.getElementById("option-notfire-label").innerHTML = "🙌 Don't Fire";
  document.getElementById("option-decreasesalary-label").innerHTML = "⬇️ Decrease Salary";
  document.getElementById("option-increasesalary-label").innerHTML = "⬆️ Increase Salary";
}

// Check which decision the user selected; if none, show option modal.
function evaluateAnswer() {
  const currentQuestion = questions[indexNumber];
  const options = document.getElementsByName("option");
  let selectedValue = null;
  
  options.forEach(option => {
    if (option.checked) {
      selectedValue = option.value;
    }
  });

  if (selectedValue === null) {
    document.getElementById('option-modal').style.display = "flex";
    return false;
  }

  // Get the decision outcome for the chosen option.
  const decisionOutcome = currentQuestion.decisions[selectedValue];

  // Update global metrics:
  // Add the efficiency, profit, and public perception deltas.
  efficiency += decisionOutcome.efficiency;
  profit += decisionOutcome.profit;
  publicPerception += decisionOutcome.publicPerception;
  // Update company valuation based on profit change.
  companyValuation = Math.round(companyValuation * (1 + (decisionOutcome.profit / 100)));
  
  decisionCount++;

  // Prepare evaluation message including revealed employee title.
  const evalMessage = decisionOutcome.outcomeMsg +
    "<br><br><strong>New Efficiency:</strong> " + efficiency + "%" +
    "<br><strong>New Profit:</strong> " + profit + "%" +
    "<br><strong>New Public Perception:</strong> " + publicPerception + "%" +
    "<br><strong>Company Valuation:</strong> $" + companyValuation.toLocaleString();

  document.getElementById("evaluation-message").innerHTML = evalMessage;
  document.getElementById("evaluation-modal").style.display = "flex";

  // Update on-screen metrics display (if you have dedicated DOM elements)
  updateMetricDisplays();

  return true;
}

// Called when the "Continue" button is clicked in the evaluation modal.
function closeEvaluationModal() {
  document.getElementById("evaluation-modal").style.display = "none";
  indexNumber++;
  unCheckRadioButtons();
  resetOptionBackground();
  if (indexNumber < questions.length) {
    nextQuestion(indexNumber);
  } else {
    handleEndGame();
  }
}

// Called when "Next Question" button is clicked.
function handleNextQuestion() {
  if (!evaluateAnswer()) {
    return;
  }
  // The next question is loaded in closeEvaluationModal() after evaluation.
}

// Resets the background color of option labels.
function resetOptionBackground() {
  const options = document.getElementsByName("option");
  options.forEach(option => {
    document.getElementById(option.labels[0].id).style.backgroundColor = "";
  });
}

// Uncheck all radio buttons for the next question.
function unCheckRadioButtons() {
  const options = document.getElementsByName("option");
  options.forEach(option => {
    option.checked = false;
  });
}

// Closes the missing option modal.
function closeOptionModal() {
  document.getElementById('option-modal').style.display = "none";
}

// End-of-game logic: display final results.
function handleEndGame() {
  // Set results in the final modal.
  document.getElementById('decision-count').innerHTML = decisionCount;
  document.getElementById('company-value').innerHTML = "$" + companyValuation.toLocaleString();
  document.getElementById('efficiency-final').innerHTML = efficiency + "%";
  document.getElementById('profit-final').innerHTML = profit + "%";
  document.getElementById('public-perception-final').innerHTML = publicPerception + "%";
  document.getElementById('score-modal').style.display = "flex";
}

// Closes the final score modal and resets the game.
function closeScoreModal() {
  indexNumber = 0;
  decisionCount = 0;
  companyValuation = 100000;
  efficiency = 50;
  profit = 50;
  publicPerception = 50;
  updateMetricDisplays();
  nextQuestion(indexNumber);
  document.getElementById('score-modal').style.display = "none";
}
