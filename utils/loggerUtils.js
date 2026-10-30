export function logger(message) {
  //   console.log([`${new Date().toLocaleDateString()} : ${message}`]);

  const date = new Date();
  console.log(
    `${date.toLocaleDateString("en-GB")} ${date.toLocaleTimeString("en-GB")} : ${message}`,
  );
}
