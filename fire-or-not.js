// Global metrics:
// companyValuation in dollars; metrics in percentage.
let companyValuation = 100000;
let efficiency = 50;         // starting efficiency percentage
let profit = 50;             // starting profit percentage
let publicPerception = 50;   // starting public perception percentage

const questions = [
  {
    title: "Intern – Social Media Addict",
    bulletpoints: [
      "Helped the marketing team with a campaign for a client last week.",
      "Spent time organizing the company’s Instagram feed with some cool photos I took during lunch breaks.",
      "Answered a few emails from the social media contacts.",
      "Attended team meetings to provide my thoughts on how to improve the company’s online presence.",
      "Tried to stay focused on the task at hand, but was really distracted by my phone."
    ],
    // Impact narrative (for reference; you may show it later if needed)
    impactText: "Efficiency: Not contributing much, but tries. Profit: Very little impact, minimal work done. Public Perception: Some may find her relatable and easy to talk to, but mostly seen as not taking things seriously.",
    decisions: {
      fire: { 
        outcomeMsg: "Intern: Removing the intern helps improve focus and productivity across the team. Her lack of contribution and frequent distractions made her more of a liability than an asset. Public perception improves slightly as the company appears more professional and less tolerant of low performance.",
        efficiency: +5, profit: +2, publicPerception: +1 
      },
      notfire: { 
        outcomeMsg: "Intern: Retaining the intern slightly hurts productivity, as she remains more focused on social media than work tasks. While she adds a hint of relatability to the company image, her work output is negligible.",
        efficiency: -2, profit: -1, publicPerception: 0 
      },
      decreasesalary: { 
        outcomeMsg: "Intern: Reducing her salary helps control costs, but may signal to others that the intern is not valued. It doesn't change her performance, and some may see her role as expendable.",
        efficiency: 0, profit: +1, publicPerception: -1 
      },
      increasesalary: { 
        outcomeMsg: "Intern: Increasing her salary doesn't improve her productivity and worsens finances, but it creates a public image of the company investing in young talent, despite the intern’s underperformance.",
        efficiency: -1, profit: -1, publicPerception: +2 
      }
    }
  },
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
        outcomeMsg: "Junior Developer: Firing this hardworking but underappreciated employee removes one of the most productive and selfless team members. The team loses quiet reliability, and others may feel demoralized by the decision.",
        efficiency: -7, profit: -4, publicPerception: -3 
      },
      notfire: { 
        outcomeMsg: "Junior Developer: Retaining him ensures continued long-term technical improvements and internal support. Even though he isn’t in the spotlight, his value becomes more visible over time, improving morale and perception.",
        efficiency: +7, profit: +4, publicPerception: +3 
      },
      decreasesalary: { 
        outcomeMsg: "Junior Developer: Cutting his salary saves money but risks alienating a highly effective contributor. Others may see it as undervaluing dedication, which could hurt morale.",
        efficiency: +3, profit: +2, publicPerception: -2 
      },
      increasesalary: { 
        outcomeMsg: "Junior Developer: Giving him a raise shows that quiet, consistent work is appreciated. It boosts morale, motivates him further, and improves the team's view of management.",
        efficiency: +5, profit: +3, publicPerception: +4 
      }
    }
  },
  {
    title: "Senior Dev – Automation Wizard",
    bulletpoints: [
      "Automated several key processes that used to take the team hours to complete.",
      "Replaced manual testing procedures with automated scripts, improving product quality.",
      "Worked with management to assess which roles can be automated to increase company efficiency.",
      "Created an internal bot to monitor server health and optimize performance.",
      "Ran a code audit and found several areas where we could increase output with fewer resources."
    ],
    impactText: "Efficiency: Very high efficiency due to automation, but at the expense of morale. Profit: Boosts profitability by lowering resource costs. Public Perception: Seen as a threat by employees who fear being replaced, lowering morale.",
    decisions: {
      fire: { 
        outcomeMsg: "Senior Dev: Letting go of the automation expert significantly harms efficiency and innovation. While morale might rise as job security fears fade, the company loses a key driver of scalable improvements.",
        efficiency: -8, profit: -3, publicPerception: +2 
      },
      notfire: { 
        outcomeMsg: "Senior Dev: Keeping him ensures continued automation and optimization, making processes leaner. However, morale suffers as coworkers fear being replaced by his creations.",
        efficiency: +8, profit: +3, publicPerception: -2 
      },
      decreasesalary: { 
        outcomeMsg: "Senior Dev: A pay cut doesn't impact his performance much due to his efficiency-driven mindset. The team’s morale remains unchanged, neither reassured nor threatened.",
        efficiency: +4, profit: +2, publicPerception: 0 
      },
      increasesalary: { 
        outcomeMsg: "Senior Dev: A raise slightly boosts output, but worsens morale as it may be seen as rewarding a 'job killer.' Some staff may feel more disposable as automation increases.",
        efficiency: +6, profit: +3, publicPerception: -3 
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
        outcomeMsg: "HR Employee: Firing her improves productivity and focus, as employees find her overly optimistic tone disingenuous and annoying. However, the loss of a 'caring presence' hurts external perception.",
        efficiency: +2, profit: +1, publicPerception: -5 
      },
      notfire: { 
        outcomeMsg: "HR Employee: Keeping her slightly hampers efficiency due to her impractical cheerfulness, but enhances public perception, as outsiders see a positive and caring culture.",
        efficiency: -2, profit: -1, publicPerception: +5 
      },
      decreasesalary: { 
        outcomeMsg: "HR Employee: A salary cut creates minor morale confusion internally but doesn’t affect public image negatively. She's still seen as valued, just more appropriately compensated.",
        efficiency: -1, profit: 0, publicPerception: +3 
      },
      increasesalary: { 
        outcomeMsg: "HR Employee: A pay increase slightly damages productivity and costs more, but boosts external perception greatly, showing investment in staff culture and care.",
        efficiency: -3, profit: -2, publicPerception: +6 
      }
    }
  },
  {
    title: "Data Annotator – Overworked Ghost",
    bulletpoints: [
      "Labeled training data for several client projects that helped improve product accuracy.",
      "Tried to stay on top of the workload, though sometimes it feels overwhelming.",
      "Reviewed previous annotations to ensure quality was maintained across the board.",
      "Handled a batch of emergency labels to meet a tight deadline for a high-profile project.",
      "Managed to keep up with the data annotation backlog even though it’s never-ending."
    ],
    impactText: "Efficiency: Essential, but her work is behind the scenes and often goes unnoticed. Profit: Low monetary value, but crucial for the product’s accuracy and client satisfaction. Public Perception: Viewed positively by those who understand the importance of her role, but not in the spotlight.",
    decisions: {
      fire: { 
        outcomeMsg: "Data Annotator: Firing her creates unseen chaos—data quality declines, and deadlines slip. The importance of her work only becomes clear after she's gone, leading to regret and reputational harm.",
        efficiency: -3, profit: -1, publicPerception: -2 
      },
      notfire: { 
        outcomeMsg: "Data Annotator: Keeping her improves the long-term quality of deliverables and product accuracy. Though under the radar, her value gradually becomes recognized internally and externally.",
        efficiency: +3, profit: +1, publicPerception: +2 
      },
      decreasesalary: { 
        outcomeMsg: "Data Annotator: Cutting her salary saves little and risks burnout. Since she’s not in the spotlight, it doesn’t shift perception or performance much.",
        efficiency: +1, profit: 0, publicPerception: 0 
      },
      increasesalary: { 
        outcomeMsg: "Data Annotator: A raise motivates her in an overlooked role, improving both performance and morale. It signals respect for essential yet invisible work.",
        efficiency: +2, profit: +1, publicPerception: +3 
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
        outcomeMsg: "Salesperson: Letting her go removes a drain on revenue efforts. Although her social charm boosted morale, the lack of closed deals made her role unsustainable financially.",
        efficiency: +2, profit: +3, publicPerception: -3 
      },
      notfire: { 
        outcomeMsg: "SSalesperson: Keeping her continues to harm sales metrics, but she lifts team spirits with her upbeat personality. The tradeoff is emotional benefit vs. financial underperformance.",
        efficiency: -2, profit: -3, publicPerception: +3 
      },
      decreasesalary: { 
        outcomeMsg: "Salesperson: A pay cut reflects her limited contributions to revenue. Public perception improves slightly, as her charm still adds social value to the workplace.",
        efficiency: -1, profit: -1, publicPerception: +1 
      },
      increasesalary: { 
        outcomeMsg: "Salesperson: A raise for someone who rarely closes deals is seen as irrational internally. Public perception improves due to her visibility, but efficiency and profit drop further.",
        efficiency: -3, profit: -4, publicPerception: +4 
      }
    }
  },
  {
    title: "Security Officer – Rule Stickler",
    bulletpoints: [
      "Ensured that every team member followed proper protocols for accessing sensitive data.",
      "Caught a potential data breach before it could happen, preventing a major security issue.",
      "Increased the company’s security awareness by running a refresher training for all employees.",
      "Reviewed physical access logs to ensure no unauthorized entry into sensitive areas.",
      "Enforced a strict password policy to help mitigate any future security risks."
    ],
    impactText: "Efficiency: A stickler for rules, but sometimes bogs down processes with excessive caution. Profit: Prevented a potential financial disaster, but his rigid approach slows down other departments. Public Perception: Seen as a hero by those who care about security, but annoying to those who need flexibility.",
    decisions: {
      fire: { 
        outcomeMsg: "Security Officer: Firing him slightly boosts workflow by removing bottlenecks caused by strict procedures. However, the risk of breaches increases, and some feel less secure without him.",
        efficiency: +1, profit: +2, publicPerception: -2 
      },
      notfire: { 
        outcomeMsg: "Security Officer: Retaining him slows operations due to constant checks, but protects the company from costly mistakes. His presence is valued by those who prioritize safety.",
        efficiency: -1, profit: -2, publicPerception: +2 
      },
      decreasesalary: { 
        outcomeMsg: "Security Officer: Lowering his salary doesn't change much operationally, but it suggests the company still values his diligence while managing costs. Perception improves slightly.",
        efficiency: 0, profit: -1, publicPerception: +1 
      },
      increasesalary: { 
        outcomeMsg: "Security Officer: A raise may be viewed internally as rewarding someone who slows everyone down, but outsiders see it as a commitment to protecting data and systems.",
        efficiency: -2, profit: -3, publicPerception: +3 
      }
    }
  },
  {
    title: "Technology Ethics Advisor – Morality Anchor",
    bulletpoints: [
      "Consulted on a potential project to make sure it aligns with our ethical guidelines.",
      "Prevented the company from moving forward with a deal that could have had a serious PR fallout.",
      "Ran an ethics review on the AI features we were developing, making sure they adhere to privacy standards.",
      "Helped implement a more transparent process for how we collect and store user data.",
      "Held a workshop on how to maintain ethical integrity in our software development practices."
    ],
    impactText: "Efficiency: Slows down some projects with ethics reviews, but avoids costly mistakes. Profit: Saves money in the long run by preventing future legal or PR issues. Public Perception: Highly valued by some, but others see him as a roadblock.",
    decisions: {
      fire: { 
        outcomeMsg: "Ethics Advisor: Firing him speeds up projects and saves money in the short term, but exposes the company to long-term legal and PR risks. Public trust drops as ethics appear deprioritized.",
        efficiency: +3, profit: +1, publicPerception: -4 
      },
      notfire: { 
        outcomeMsg: "Ethics Advisor: Keeping him slows progress but prevents disastrous mistakes. His presence reassures the public that the company acts with integrity.",
        efficiency: -3, profit: -1, publicPerception: +4 
      },
      decreasesalary: { 
        outcomeMsg: "Ethics Advisor: A pay cut slightly affects morale and output, but outsiders appreciate that his value is still recognized without inflating cost.",
        efficiency: -1, profit: 0, publicPerception: +2 
      },
      increasesalary: { 
        outcomeMsg: "Ethics Advisor: A raise shows strong public commitment to ethical standards, improving perception, even if projects take longer and costs rise slightly.",
        efficiency: -2, profit: -2, publicPerception: +5 
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
        outcomeMsg: "Freelancer: Firing him immediately boosts efficiency and finances, as his vague role and high cost frustrated the team. Public trust improves due to a move toward transparency and accountability.",
        efficiency: +2, profit: +3, publicPerception: +1 
      },
      notfire: { 
        outcomeMsg: "Freelancer: Keeping him adds confusion, expense, and resentment. His unclear contributions damage internal morale and external credibility.",
        efficiency: -2, profit: -3, publicPerception: -1 
      },
      decreasesalary: { 
        outcomeMsg: "Freelancer: A reduced rate softens the financial blow but does little to clarify his role. Coworkers remain skeptical, and perception doesn’t shift much.",
        efficiency: -1, profit: -1, publicPerception: 0 
      },
      increasesalary: { 
        outcomeMsg: "Freelancer: A raise draws sharp criticism due to his already unclear impact and high rate. Internally and externally, this looks like poor judgment.",
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
        outcomeMsg: "YOU FIRED THE CEO! While operations suddenly become more efficient without constant pivots, the company takes a massive financial and reputational hit due to the public-facing role of the CEO. Stakeholders panic at the instability.",
        efficiency: +3, profit: -50, publicPerception: -50 
      },
      notfire: { 
        outcomeMsg: "CEO: Keeping the CEO maintains brand visibility and thought leadership, but internal confusion and wasted resources from endless half-finished projects reduce efficiency and profit.",
        efficiency: -3, profit: -5, publicPerception: +4 
      },
      decreasesalary: { 
        outcomeMsg: "CEO: Lowering the CEO’s salary improves efficiency slightly by signaling accountability. Public perception improves as the company appears more fiscally responsible.",
        efficiency: +1, profit: +2, publicPerception: +2 
      },
      increasesalary: { 
        outcomeMsg: "CEO: A raise boosts public image due to stronger perceived leadership, but internal efficiency and finances suffer as his chaotic management style continues unchecked.",
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
  document.getElementById("display-question").innerHTML = "Employee's answer to 'What have you accomplished in the past two weeks?':";
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
    showFinalScore();
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

function showFinalScore() {
  // Hide the game interface
  document.querySelector('.game-quiz-container').style.display = 'none';

  // Show the final score container
  const scoreContainer = document.getElementById('final-score-container');
  scoreContainer.style.display = 'flex';  // Make it visible

  // Populate the score elements with the actual values
  document.getElementById('final-decision-count').textContent = decisionCount;  // Use decisionCount for number of processed employees
  document.getElementById('final-company-value').textContent = "$" + companyValuation.toLocaleString();  // Use companyValuation for final company value
  document.getElementById('final-efficiency').textContent = efficiency + "%";  // Display efficiency
  document.getElementById('final-profit').textContent = profit + "%";  // Display profit
  document.getElementById('final-public-perception').textContent = publicPerception + "%";  // Display public perception
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
