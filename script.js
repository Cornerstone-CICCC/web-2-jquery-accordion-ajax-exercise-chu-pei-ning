$(function() {
  // your code here
  //Exercise 1
  $('.accordion-header').on('click', function() {
    $('.accordion-content').slideUp() //everything slideup
    if(!$(this).next('.accordion-content').is(':visible')) {
      $(this).next('.accordion-content').slideDown()
    }
  })

  //Exercise 2
  $('.todos').on('click', () => {
    $.ajax({
      url: 'https://dummyjson.com/todos',
      type: 'GET',
      success: function(response) {
        const todos = response.todos
        $('ul').empty() //clean the list to avoid repeat
        todos.forEach(todo => {
          $('ul').append(`
            <li> ${todo.todo} </li>
            `)
        })
      },
      error: function(err) {
        console.log(err)
      }
    })  
  })
})