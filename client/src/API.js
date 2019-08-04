export default {

  getTextList: () => {

    return new Promise((resolve, reject) => {
      resolve({
        data: [
          {
            id: "1",
            text: "Hello World"
          },
          {
            id: "2",
            text: "Hello World again"

          },
          {
            id: "3",
            text: "Hello World one more time"
          }
        ]
      });
    })
  },

  sendText: (text) => {
    return new Promise((resolve, reject) => {
      resolve("sent: "+text);
    });
  },

  editText: (id, text) => {
    return new Promise((resolve, reject) => {
      resolve("edited: "+id+" :"+text);
    });
  }
}
