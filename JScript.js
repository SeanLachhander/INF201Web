function JScript()
{
document.getElementById("GuessCD").innerHTML = "Sean has released 35 CDs to date.";
}

function finishedWork()
{
alert("A riddim refers to the instrumental of a song. A riddim can consist of 2-10 artists releasing a song on the same instrumental.");
}

function whatIsWaves()
{
document.getElementById("Waves").innerHTML = "Waves is known to be the world's leading developer of VST plugins and signal processors. Waves specializes in not only consumer/professional audio markets."
}

function finishedWorkTwo() 
{
    var userInput = parseInt(document.getElementById("uInput").value);
    var cdNames = ["All Out", "Hot & Spicy", "Self Destruct", "Remixer Paradise", "Remixer Paradise 2", "Remixer Paradise 3", "Remixer Paradise 2K15", "Original Don", "Hot Shotz", "Lovers Reggae 3", "Heart Broken", "Lonely Nights", "Lonely Nights 2", "Soul Mate", "Bollywood Request", "Simple Tingz", "Caribbean Love", "True Love", "Reverse It", "The Gambler", "Block Party", "The Summer Vibe", "Heartache", "Love Dose", "Richmond Hill Candlelight Vigil CD", "One Heart", "Bedroom Bully", "Bedroom General", "The Revolution", "Hold My Hand", "Big Up!", "Joyride", "Henny On the Rocks", "Heart Beat", "Backstabbers"]
    var highestVariable = userInput - 1;
    var tester = "";
    var x = 0;
    var length = cdNames.length;
    while(highestVariable >= 0)
    {
    tester += cdNames[highestVariable] + " | ";
    highestVariable--;
    }
document.getElementById("uInputID").innerHTML = tester;

}

function enjoy()
{
  var didYouEnjoy = document.getElementById("Enjoy").value;
  if(didYouEnjoy == "" || didYouEnjoy == null)
  {
  alert("Fill in the text field.");
    return false;
    }
    else
    {
    
  if(didYouEnjoy == "yes" || didYouEnjoy == "Yes" || didYouEnjoy == "YES") {
  alert("I'm glad you enjoyed the website");
  return false;
  }
  else if(didYouEnjoy == "no" || didYouEnjoy == "NO" || didYouEnjoy == "No" || didYouEnjoy == "nO")
  {
  alert("I'm sorry that you didn't enjoy the website.");
  return false;
  }
  }
  }