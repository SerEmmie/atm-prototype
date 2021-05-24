var balance = 10000;
var charge = 10;
var username;
var charge =  1% (balance);

username = prompt("Enter Name");
greeting();
tyoeofacc();
atm();

function atm() {
   alert("Your Current Balance is #" + balance);
   transact();

}

function transact() {
   document.write("Welcome to the Bank");
   atmfunctions();
}


function atmfunctions() {
   var atmno = prompt("What would you like to do: \n 1.Withdraw \n 2.Deposit \n 3.Recharge \n 4.Enquiry \n 5.Quit");
   switch (atmno) {
      case "1":
         withdraw();
         break;
      case "2":
         deposit();
         break;
      case "3":
         recharge();
         break;
      case "4":
         enquiry();
         break
      case "5":
         quit();
         break;
      default:
         alert("Pls Input a valid number");
         atmfunctions()
         break;
   }

}

function tyoeofacc() {
   var toa = prompt("Select Account Type \n 1. Savings \n 2. Current");
   switch (toa) {
      case "1":
         break;
      case "2":
         break;
      default:
         alert("Input a valid Number");
         tyoeofacc();
         break;
   }
}

function withdraw() {
   var wamount = prompt("how much would you like to withdraw:");
   if (wamount < balance) {
      balance = balance -= wamount;
      balance = balance - charge;
   } else {
      alert("Insufficient Fund");
      withdraw();
   }
   success();
   alert("Current Balance: " + balance);
   tocontinue();
}

function deposit() {
   var damount = prompt("Amount to Deposit:");
   balance = balance += damount;
   balance = balance - charge;
   success();
   alert("Current Balance: " + balance);
   tocontinue();

}

function recharge() {
   var rnumber = prompt("Input Number")
   var ramount = prompt("Amount to Recharge: ");
   balance = balance -= ramount;
   balance = balance - charge;
   topupsuccessful(ramount, rnumber);
   alert("Current Balance: " + balance);
   tocontinue();
}

function enquiry() {
   alert("Dear " + username + "\n Your Account Balance is " + balance);
   tocontinue();
}

function tocontinue(con) {
   var conti = prompt("Perform another transaction \n 1.Yes \n 2.No");
   switch (conti) {
      case "1":
         conitnue();
         break;
      case "2":
         exit();
         break;
      default:
         alert("Input a valid number")
         break;
   }



}

function password() {
   Array; {
      4
   }
}

function conitnue() {
   atmfunctions();
}

function exit() {
   alert("Thank you for banking with us")
}

function success() {
   alert("transacation Successful")
}

function topupsuccessful(ramount, rnumber) {
   alert("You have successfully topup " + ramount + " to " + rnumber);
}

function greeting() {
   alert("Dear " + username + " welcome to our Bank");
}