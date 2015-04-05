var ready = function () {
    start();
    minimize();
    closeChat();
    textChecker();
    boxChecker();
};

function start(){
  $('.start-conversation').click(function (e) {
    e.preventDefault();
    var sender_id = $(this).data('sid');
    var recipient_id = $(this).data('rip');

    $.post("/conversations", { sender_id: sender_id, recipient_id: recipient_id }, function (data) {
        chatBox.chatWith(data.conversation_id);
    });
  }); 
}

function minimize(){
  $(document).on('click', '.toggleChatBox', function (e) {
    e.preventDefault();
    var id = $(this).data('cid');
    chatBox.toggleChatBoxGrowth(id);
    });
}

function closeChat(){
  $(document).on('click', '.closeChat', function (e) {
    e.preventDefault();
    var id = $(this).data('cid');
    chatBox.close(id);
});
}

function textChecker(){
  $(document).on('keydown', '.chatboxtextarea', function (event) {
    var id = $(this).data('cid');
    chatBox.checkInputKey(event, $(this), id);
  });
}

function boxChecker(){
  $('a.conversation').click(function (e) {
        e.preventDefault();
 
        var conversation_id = $(this).data('cid');
        chatBox.chatWith(conversation_id);
  });
}
 
$(document).ready(ready);
$(document).on("page:load", ready);