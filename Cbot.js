const messageList = document.querySelector(".chat-box");

const input = document.querySelector(".chat-input input");

const sendButton = document.querySelector(".chat-input button");

 

const responses = {

    Greeting: [

        "Hello there",

        "Hi! How can I help you today",

    ],

    Farewell: [

        "Goodbye!",

        "Bye! Have a great day",

    ],

    Emotion: [

        "Great thank you and yourself",

        "Well and yourself",

    ],

    Good: [

        "Do you have a question for me",

    ],

    Yes: [

        "What would you like to ask"

    ],

    Personal: [

        "Our Personal loans are granted based on the borrower's creditworthiness,income, and other financial factors you can find out more on our Loan Types page.",

    ],

    Medical:[

        "Crimson Cash Loans medical loan is more like a personal loan taken out for the specific purpose of financing medical treatment find out more on our Loan Types page.",

    ],

    Home: [

        "For most people, purchasing a home is the biggest financial decision they will ever make. Crimson Cash Loans understands that homes often costing hundreds of thousands and in some cases millions of Rands.",

    ],

    Business: [

        "Crimson Cash Loans will assess what scale of financing we can offer, as well as the other terms of the loan.",

    ],

    Auto: [

        "Our Auto loans are simple-interest loans, where the Crimson Cash Loans expects to be repaid by the borrower in monthly instalments for the amount we lent plus interest.",

    ],

    Student: [

        "CrimsonLoans offer student loan with relatively low costs, easier approval, and benefits at payback time compared to other types of loans.",

    ],

    Loan: [

        "We offer different loan types such as Student Loans, Auto Loans, Business Loans, Home Loans, Medical Loans and Personal Loans which one would you like to know about",

    ],

    Interest: [

        "Here at Crimson Cash Loans our interest rate varies from 15% up until 25%",

    ],

    Age: [

        "You must atleast be at the legal age of 18 years old or older",

    ],

    Long: [

        "As soon as all the documents have been received, the process should take up to 7-14 working days for the money to go into your bank account",

    ],

    Early: [

        "No, there is not a penalty for a early payment fee",

    ],

    Late: [

        "Yes, there is a penalty for a late payment fee it's 5% increase depenging your loan option package you taken",

    ],

    Apply: [

        "You can apply with us by going to our application page and filling in the necessary details after that click submit",

    ],

    Approve: [

        " If it's Approved, underwriting will assign conditions such as clarification regarding a late payment or large deposit.",

    ],

    Suspend: [

        "If the process is Suspended which is not completely unusual, you will probably need to clarify something.",

    ],

    Decline: [

        "If you're Denied you'll want to find out why within 60 days because not all loans that start as denials sometimes it requires you to rethink your loan product."

    ],

    Customer: [

        "Head over to our Contact Us page to contact us we will respond only during working hours.",

    ],

    Security: [

        "We have FDIC for protecting your insurance, Data Encryption for strong online encryption and Multi-Factor Authentication for multiple layers before granting anyone access to their account.",

    ],

    Documents: [

        "3-6 months of Bank Statement ,provide proof of income as well as proof of residence and a certified ID copy",

    ],

    Requirements: [

        "The requirements needed is a valid South African ID, atleast 18 years of age with a bank account and a stable income",

    ],

};  

 

sendButton.addEventListener("click", () => {

    if (input.value !== "") {

        const message = document.createElement("div");  

        message.classList.add("chat-message", "user-message");

        message.innerHTML =

        `<div class="chat-message-text">${input.value}`;

        messageList.appendChild(message);

 

        const inputText = input.value.toLowerCase();

        let intent = "Default";

        if (inputText.includes("hello") || inputText.includes("hi") || inputText.includes("hey")){

            intent = "Greeting";

        }  else if (inputText.includes("bye") || inputText.includes("goodbye") || inputText.includes("thanks")) {

            intent = "Farewell";

        }  else if (inputText.includes("how are you") || inputText.includes("how you")) {

            intent = "Emotion";

        }  else if (inputText.includes("good") || inputText.includes("bad") || inputText.includes("great") || inputText.includes("fantastic")) {

            intent = "Good";

        }  else if (inputText.includes("yes") || inputText.includes("yea")) {

            intent = "Yes";

        }  else if (inputText.includes("personal loan") || inputText.includes("personal")) {

           intent = "Personal";

        }  else if (inputText.includes("medical loan") || inputText.includes("medical")) {

            intent = "Medical";

         } else if (inputText.includes("home loan") || inputText.includes("home")) {

            intent = "Home";

         } else if (inputText.includes("business loan") || inputText.includes("business")) {

            intent = "Business";

         } else if (inputText.includes("auto loan") || inputText.includes("auto")) {

            intent = "Auto";

         } else if (inputText.includes("student loan") || inputText.includes("student")) {

            intent = "Student";

         } else if (inputText.includes("loans")) {

            intent = "Loan";

         } else if (inputText.includes("interest") || inputText.includes("rate")) {

            intent = "Interest";

         } else if (inputText.includes("age")) {

            intent = "Age";

         } else if (inputText.includes("long") || inputText.includes("get")) {

            intent = "Long";

         } else if (inputText.includes("early payment")) {

            intent = "Early";

         } else if (inputText.includes("late payment")) {

            intent = "Late";

         } else if (inputText.includes("apply") || inputText.includes("sign") || inputText.includes("join")){

            intent = "Apply";

        }  else if (inputText.includes("approve")) {

            intent = "Approve";

         } else if (inputText.includes("suspend")) {

            intent = "Suspend";

         } else if (inputText.includes("decline")) {

            intent = "Decline";

         } else if (inputText.includes("contact") || inputText.includes("help")) {

            intent = "Customer";

         } else if (inputText.includes("security") || inputText.includes("protect")) {

            intent = "Security";

         } else if (inputText.includes("documents")) {

            intent = "Documents";

         } else if (inputText.includes("require") || inputText.includes("eligibile")) {

            intent = "Requirements";

         }    

 

        setTimeout(() => {

            const randomIndex = Math.floor(Math.random() * responses[intent].length);

            const responseText = responses[intent][randomIndex];

            const botMessage = document.createElement("div");

            botMessage.classList.add("chat-message", "bot-message");

            botMessage.innerHTML = `<div class="chat-message-text">${responseText}</div>`;

            messageList.appendChild(botMessage);

         

            messageList.scrollTop = messageList.scrollHeight;

        }, 1000);

    }

});

 

input.addEventListener("keyup", (e) => {

    if (e.key === "Enter") {

        sendButton.click();

    }

});

function toggleChat() {

    var chatContainer = document.getElementById("chat-container");

    chatContainer.classList.toggle("collapsed");

}

 

function sendMessage() {

    // Your existing send message logic here

}