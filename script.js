// Initialize BotUI
var botui = new BotUI('botui-app');

// Show the chatbot
document.getElementById('botui-app').style.display = 'block';

// First message from the bot
botui.message.add({
    content: 'Hi! I am your portfolio assistant. What is your name?'
}).then(function () {
    return botui.action.text({
        action: {
            placeholder: 'Type your name here'
        }
    });
}).then(function (res) {
    botui.message.add({
        content: 'Nice to meet you, ' + res.value + '!'
    });
});
