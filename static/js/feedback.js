let feedback = document.getElementById("feedback");
if (feedback) {
    const path = feedback.innerText;
    const link = "https://github.com/School-of-Rust/school-of-rust/tree/main/content" + path.substring(0, path.length - 1) + ".md";
    feedback.innerHTML = 'Feedback is always welcome on our <a href="https://discord.gg/vdPK7ztcD2" target="_blank"><i class="fa-brands fa-discord"></i>&nbsp;Discord</a>. If you\'ve found an error or a typo, you can also submit a <a href="' + link + '"><i class="fa-brands fa-github"></i>&nbsp;pull request</a> to this page directly.';
}