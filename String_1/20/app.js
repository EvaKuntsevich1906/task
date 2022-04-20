const str = prompt().toLowerCase().trim();
if (str.endsWith(".ru") || str.endsWith(".com")) {
    console.log("YES");
} else {
    console.log("NO");
}