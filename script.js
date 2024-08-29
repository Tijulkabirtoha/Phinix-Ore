document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let commentInput = document.getElementById('commentInput');
    let commentList = document.getElementById('commentList');

    if (commentInput.value.trim()) {
        let comment = document.createElement('div');
        comment.className = 'comment';
        comment.textContent = commentInput.value.trim();
        commentList.appendChild(comment);
        commentInput.value = '';
    }
});
