const getTitle = (url, callback) => {
  $.get(`https://crossorigin.me/${url}`, (data) => {   
    const html = $.parseHTML(data);
    const bogus = $('<bogus>').append(html);
    const title = bogus.find('title').text();
    callback(title);
  });  
};

var urls = [
  'https://medium.com/@unakravets/the-sad-state-of-entitled-web-developers-e4f314764dd',
  'http://frontendnewsletter.com/issues/1#start',
  'https://groups.google.com/forum/#!topic/v8-users/PInzACvS5I4',
  'https://www.youtube.com/watch?v=9kJVYpOqcVU',
]

// This comes out in a random order.
// We need some sort of async version of map.
// Perhaps Promise.all()?
urls.map((url) => { getTitle(url, console.log); });