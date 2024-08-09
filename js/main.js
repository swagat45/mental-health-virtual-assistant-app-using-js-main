let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');
//ansers are here//
let intro = ["Hello, I am Zira I am A Artificial intelligent Virtual Assistant For Help You out....How r u feeling now"];
let greetings = ["i am good you little piece of love", "i am fine, what about you",  "i am good"];
let problm = ["You have to Do yoga At least For a One Hour Maximum For a 4 hour And You have To Go For the Doctor Also"];
let helath_good= ["Nice Sir but please take care of yourself"];
let thank = ["Most welcome","Not an issue","Its my pleasure","Mention not"];
let closing = ['Ok bye-bye sir','As you wish sir, bye take-care sir','Bye-bye sir, see you soon sir..'];
let mental_health_catagories= ["please tell me sir what type of problem you are facing Now   you feel depressed  you feel sleepy  your mood changed too much you feel upset and sad you wanted to commit suicied  you got too much negative thought during your work"];
let depre= ["you have too watch some funny videos memes and do something which u like most"];
let sleeply= ["you have some tea or coffee and then go to your friends house and make some fun"];
let mood= ["Keep a schedule Try to create a routine for yourself especially when it comes to eatings leeping 1)Exercise regularly 2) Avoid stress"];
let sad =['Think about whether your sleep and eating patterns are good for you Help someone else Find a creative way to express your sadness'];
let suicide = ['Do not Do this thinkYour emotions are not fixed—they are constantly changing How you feel today may not be the same as how you felt yesterday or how you will feel tomorrow or next week so please do not kill yourself .Youre alive only once, as far as we know, and what could be worse than getting to the end of your life and realizing you hadnt lived it?'];
let negitivity = ['One way to deal with negative thoughts is to replace them with thoughts that make you feel better Let me say you just learned that you have a health problem You might tell yourself My life will never be the way it used to be or This is the beginning of the end for me That will probably make you feel pretty bad-and it will make your body weaker just when you need it to be strong']
let mental_helath_prblms = [' some mental health problems 1)Anxiety disorders 2)Behavioural and emotional disorders in children 3)Bipolar affective disorder 4)Depression etc'];
let mental_helath_prblms_one=['A mental health disorder characterised by feelings of worry anxiety or fear that are strong enough to interfere with one s daily activities'];
let mental_helath_prblms_one_symptm=[' very Common Symptoms  1)Sweating 2)Feeling nervous restless or tense 3)Trembling 4)Feeling weak or tired 5)Breathing rapidly'];
let mental_helath_prblms_one_solution=['1)SELF-TREATMENT 2)SEEKING MEDICAL CARE'];
let mental_helath_prblms_two = ['An emotional and behavioral disorder is an emotional disability characterized by the following An inability to build or maintain satisfactory interpersonal relationships with peers and or teachers For preschool age children this would include other care providers'];
let mental_helath_prblms_two_symptm = ['The most common disruptive behaviour disorders include oppositional defiant disorder (ODD) conduct disorder (CD) and attention deficit hyperactivity disorder (ADHD) These three behavioural disorders share some common symptoms so diagnosis can be difficult and time consuming'];
let mental_helath_prblms_two_solution = ['Here are five effective strategies you can use to help EBD kids work well in an inclusive classroom 1)Keep class rules/activities simple and clear 2)Reward positive behaviors 3)Allow for mini-breaks 4)Fair treatment for all 5)Use motivational strategies'];
let mental_helath_prblms_third = ['Bipolar affective disorder (BPAD) is a psychological illness that involves severe mood swings. These mood swings take the form of depression or mania and may last for several months at a time During the time of depression patients often have great sadness, guilt, no appetite, poor sleep and can not enjoy themselves'];
let mental_helath_prblms_third_symptm = ['Manic episodes may include symptoms such as high energy reduced need for sleep and loss of touch with reality. Depressive episodes may include symptoms such as low energy'];
let mental_helath_prblms_third_solution =['there are some treatments  1)Treatment consists of medications and therapy 2)Supportive care'];
let mental_helath_prblms_fourth = ['Depression is classified as a mood disorder It may be described as feelings of sadness, loss, or anger that interfere with a person’s everyday activities.'];
let mental_helath_prblms_fourth_symptm = ['mood such as anger aggressiveness, irritability anxiousness, restlessness  emotional well-being such as feeling empty sad hopeless etc'];
let mental_helath_prblms_fourth_solution = ['You can also improve symptoms of depression by taking care of yourself This includes getting plenty of sleep eating a healthy diet avoiding negative people and participating in enjoyable activities'];


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function showusermsg(usermsg){
    let output = '';
    output += `<div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function showchatbotmsg(chatbotmsg){
    let output = '';
    output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function chatbotvoice(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = "I Dont understand Sir";
    if(message.includes('hi' ||'hello')){
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
        
    }
    else if(message.includes('tell me about mental health problems')){
        let finalresult = mental_health_catagories;
        speech.text = finalresult;
        
    }
    else if(message.includes('fine')){
        let finalresult = helath_good;
        speech.text = finalresult;
    }
    else if(message.includes('how are you')){
        let finalresult = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalresult;
    }
    else if(message.includes('feeling depressed')){
        let finalresult = depre;
        speech.text = finalresult;
    }
    else if(message.includes('feeling sleepy')){
        let finalresult = sleeply;
        speech.text = finalresult;
    }
    else if(message.includes('my mood changing')){
        let finalresult = mood;
        speech.text = finalresult;
    }

    else if(message.includes('feeling upset and sad')){
        let finalresult = sad;
        speech.text = finalresult;
    }
    
    
    else if(message.includes('I wanted to commit suicide')){
        let finalresult = suicide;
        speech.text = finalresult;
    }


    else if(message.includes('getting too much negativity')){
        let finalresult = negitivity;
        speech.text = finalresult;
    }


   else  if(message.includes('tell me about mental illness')){
        let finalresult = mental_helath_prblms;
        speech.text = finalresult;
    }

   else  if(message.includes('tell me about anxiety disorders')){
        let finalresult = mental_helath_prblms_one;
        speech.text = finalresult;
    }
    
    else if(message.includes('tell me about Behavioural disorders in children')){
        let finalresult = mental_helath_prblms_two;
        speech.text = finalresult;
    }

   else  if(message.includes('tell me about bipolar affective disorder')){
        let finalresult = mental_helath_prblms_third;
        speech.text = finalresult;
    }

   else  if(message.includes('tell me about depression')){
        let finalresult = mental_helath_prblms_fourth;
        speech.text = finalresult;
    }

   else  if(message.includes('tell me the solution of anxiety disorders')){
        let finalresult = mental_helath_prblms_one_solution;
        speech.text = finalresult;
    }

   else  if(message.includes('tell me the symtoms of Behavioural disorders in children')){
        let finalresult = mental_helath_prblms_two_solution;
        speech.text = finalresult;
    }
    else if(message.includes('tell me the solution of bipolar affective disorder')){
        let finalresult = mental_helath_prblms_third_solution;
        speech.text = finalresult;
    }

    else if(message.includes('tell me the solution of depression')){
        let finalresult = mental_helath_prblms_fourth_solution;
        speech.text = finalresult;
    }

    else if(message.includes('tell me the symptoms of depression')){
        let finalresult = mental_helath_prblms_fourth_symptm;
        speech.text = finalresult;
    }

    else if(message.includes('tell me the symptoms of bipolar affective disorder')){
        let finalresult = mental_helath_prblms_third_symptm;
        speech.text = finalresult;
    }

    else if(message.includes('tell me the symptoms of behavioural disorders in children')){
        let finalresult = mental_helath_prblms_two_symptm;
        speech.text = finalresult;
    }

   else if(message.includes('tell me the symptoms of anxiety disorders')){
        let finalresult = mental_helath_prblms_one_symptm;
        speech.text = finalresult;
    }

    


   else if(message.includes('thank you' || 'thank you so much')){
        let finalresult = thank[Math.floor(Math.random() * thank.length)];
        speech.text = finalresult;
    }
    else if(message.includes('talk to you later' || 'good bye')){
        let finalresult = closing[Math.floor(Math.random() * closing.length)];
        speech.text = finalresult;
    }
    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text));
}

recognition.onresult=function(e){
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript));
    chatbotvoice(transcript);
    console.log(transcript);
}
recognition.onend=function(){
    mic.style.background="#ff3b3b";
}
mic.addEventListener("click", function(){
    mic.style.background='#39c81f';
    recognition.start();
    console.log("Activated");
})
