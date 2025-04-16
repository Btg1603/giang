let bookmarks = JSON.parse(localStorage.getItem("bookamrks")) || [
    { name: "Google", url: "http://google.com" },
    { name: "YouTube", url: "http://youtube.com" },
    { name: "Facebook", url: "http://facebook.com" },
    { name: "GitHub", url: "http://github.com" }
];

const bookmarkEl = document.querySelector("#bookmarkList");

function renderBookmark() {
    let list = '';
    for (let i = 0; i < bookmarks.length; i++) {
        list += `
            <div class="List-mark">
                <strong>${bookmarks[i].name}</strong> - 
                <a href="${bookmarks[i].url}" target="_blank">${bookmarks[i].url}</a>
                <span class="delete-btn" onclick="deleteBookmark(${i})">✗</span>
            </div>
        `;
    }
    bookmarkEl.innerHTML = list;
    localStorage.setItem("bookmarks",JSON.stringify(bookmarks));
}

function deleteBookmark(index) {
    bookmarks.splice(index, 1);
    renderBookmark();
}

// Gọi hàm lần đầu để render
renderBookmark();
