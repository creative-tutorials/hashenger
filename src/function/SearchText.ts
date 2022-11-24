export const SearchText = function (search_input: any) {
  // console.log('hello')
  const input = search_input.current.value;
  const filter = input.toLowerCase();
  // console.log(filter);
  const grp: any = document.querySelectorAll("#group_m4");
  for (let i = 0; i < grp.length; i++) {
    const element = grp[i];
    if (element.innerText.toLowerCase().includes(filter)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }
};
