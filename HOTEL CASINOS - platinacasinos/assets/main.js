  // Acc
    $(document).on("click", ".naccs .menu div", function() {
      var numberIndex = $(this).index();

      if (!$(this).is("active")) {
          $(".naccs .menu div").removeClass("active");
          $(".naccs ul li").removeClass("active");

          $(this).addClass("active");
          $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

          var listItemHeight = $(".naccs ul")
            .find("li:eq(" + numberIndex + ")")
            .innerHeight();
          $(".naccs ul").height(listItemHeight + "px");
        }
    });




        // Modal Popup

        document.querySelectorAll(".modal_open_button").forEach(button => {
            button.addEventListener("click", function(event) {
                event.preventDefault();
                const modalId = this.getAttribute("data-modal");
                const modal = document.getElementById(modalId);
                modal.style.display = "block";

                modal.querySelector(".close").onclick = function() {
                    modal.style.display = "none";
                }

                window.onclick = function(event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                }
            });
        });


        // submit popup

        document.getElementById('myform').addEventListener('submit', function(event) {
          // Prevent default form submission
          event.preventDefault();
          
          // Display popup message
          document.getElementById('popup').style.display = 'block';
          
          // Reset form after 2 seconds
          setTimeout(function() {
            document.getElementById('myform').reset();
            document.getElementById('popup').style.display = 'none';
          }, 2000);
        });