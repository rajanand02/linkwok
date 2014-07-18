

var step_flag = new Array();

for(var i = 0; i < 6; i++)
    {
        step_flag[i] = 0;
        }

$(document).ready(function() {
    $('blockquote').quovolver();

    _addEndpoints = function(toId, sourceAnchors, targetAnchors) {
    var a, i, j, sourceUUID, targetUUID, _results;
    i = 0;
    while (i < sourceAnchors.length) {
    sourceUUID = toId + sourceAnchors[i];
    a = jsPlumb.addEndpoint(toId, sourceEndpoint, {
    anchor: sourceAnchors[i],
    uuid: sourceUUID
    });
i++;
}
j = 0;
_results = [];
while (j < targetAnchors.length) {
        targetUUID = toId + targetAnchors[j];
        a = jsPlumb.addEndpoint(toId, targetEndpoint, {
        anchor: targetAnchors[j],
        uuid: targetUUID
        });
    _results.push(j++);
    }
    return _results;
    };

    jsPlumb.Defaults.PaintStyle = {
        lineWidth: 2,
        strokeStyle: "#333",
        joinstyle: "round",
        outlineWidth: 2
        };

    jsPlumb.Defaults.HoverPaintStyle = {
        lineWidth: 2,
        strokeStyle: "#e35c02",
        outlineWidth: 2
        };


    connectorPaintStyle = {
        lineWidth: 1,
        strokeStyle: "red",
        joinstyle: "round",
        outlineWidth: 1
        };

    connectorHoverStyle = {
        lineWidth: 1,
        strokeStyle: "#ff4e00",
        outlineWidth: 1
        };

    endpointHoverStyle = {
        fillStyle: "#5C96BC"
        };

    sourceEndpoint = {
        endpoint: "Rectangle",
        cssClass: "lw_endpoint endpoint_hidden rotate_45",
        paintStyle: {
        fillStyle: "#bbb",
        width: 6,
        height: 6,
        lineWidth: 6,
        strokeStyle: "#333",
        joinstyle: "round",
        outlineWidth: 2,
        strokeWidth: 2
        },
    connectorPaintStyle: {
        lineWidth: 1,
        strokeStyle: "red",
        joinstyle: "round",
        outlineWidth: 1
        },
    connectorHoverStyle: {
        lineWidth: 1,
        strokeStyle: "#ff4e00",
        outlineWidth: 1
        },
    isSource: true,
    isTarget: true,
    connector: [
    "Flowchart", {
            gap: 1,
            cornerRadius: 5,
            alwaysRespectStubs: true
          }
        ],
        maxConnections: 100,
        connectorHoverStyle: connectorHoverStyle,
        dragOptions: {},
        overlays: [
          [
            "Arrow", {
              location: 0.5,
              cssClass: "endpointSourceLabel"
            }
          ]
        ]
      };



      jsPlumb.bind("connectionDrag",function(connection){
        $.each($(".widget"),function(){
          jsPlumb.selectEndpoints({source:$(this).attr("id")}).removeClass("endpoint_hidden")
        });

      });
      jsPlumb.bind("connection",function(connection){
          jsPlumb.selectEndpoints().addClass("endpoint_hidden");

          makeActive($('#connect_step'));
          return connection;
      });


      $('.slide-1-btn').click(function() {
        $('.slide').hide();
        $('.slide-1').fadeIn(300);
      });

      $('.slide-2-btn').click(function() {
        $('.slide').hide();
        $('.slide-2').fadeIn(300);
      });

      $('.slide-3-btn').click(function() {
        $('.slide').hide();
        $('.slide-3').fadeIn();
      });

        $('.video-btn').click(function() {
          $('.video-container').show();
          $('.video-btn').hide();
        });

        $('.video-close-btn').click(function() {
          $('.video-container').hide();
          $('.video-btn').show();
        });

        $('.single-map').click(function(){
          href=$(this).attr('map_href');
          window.location=href;
        });

        $('a[href*=#]:not([href=#])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        });


    });
    window.done_once=false;
    function makeActive($item)
    {
      if(!$item.hasClass('active'))
        $item.addClass('active').append('<span><i class="icon-check"></i></span>');

        if($("#table_step").hasClass("active") && $("#note_step").hasClass("active") && $("#image_step").hasClass("active") && $("#drag_step").hasClass("active") && $("#connect_step").hasClass("active")){
            if(window.done_once===false){
                window.done_once=true;
                $(".demo_overlay").fadeIn();
                setTimeout(function(){
                    $(".demo_overlay").fadeOut();
                },5000);
            }

        }
    }

    function changeWidget($item)
    {
      if($item.hasClass('link')) {
        $item.attr('src', 'img/widget-block-1.png').css('position', 'absolute').addClass('widget animated pulse');
      }
      else if($item.hasClass('image')) {
        $item.attr('src', 'img/image-block-large-1.png').css('position', 'absolute').addClass('widget animated pulse');
        makeActive($('#image_step'));
      }
      else if($item.hasClass('note')) {
        $item.attr('src', 'img/note-block-large.png').css('position', 'absolute').addClass('widget animated pulse');
        makeActive($('#note_step'));
      }
      else if($item.hasClass('table')) {
        makeActive($('#table_step'));
        $item.attr('src', 'img/table-block-large.png').css('position', 'absolute').addClass('widget animated pulse');
      }

      makeActive($('#drag_step'));

      $('.drag_and_drop_label').fadeOut();
    }
    window.left_draggable=0
    window.top_draggable=0

    $(function() {
      $( ".draggable" ).draggable({
        containment:".demo-panel",
        revert: function(obj){
          if(obj===false){
           setTimeout(function(){
            jsPlumb.repaintEverything()
          },500)
          return true ;
          }
        },
        start:function(event,ui){
          window.left_draggable=$(this).position().left
          window.top_draggable=$(this).position().top
        },
        drag:function(event,ui){
          jsPlumb.repaint($(this).attr("id"))
        },
        drop:function(event,ui){
          jsPlumb.repaint($(this).attr("id"))
        }

      });

      $( "#droppable" ).droppable({
        accept: ".draggable",
        drop: function( event, ui ) {
          if($(ui.draggable).hasClass("note")===true || $(ui.draggable).hasClass("table")===true){

          }
          else{
            if($(ui.draggable).hasClass("widget")===false){
              $(ui.draggable).css({
                "top":ui.position.top+window.top_draggable,
                "left":ui.position.left+window.left_draggable
              });

            }
          }

          changeWidget(ui.draggable );

        }
      });
      $(".draggable").click(function(e){
        jsPlumb.repaintEverything()
        jsPlumb.selectEndpoints().addClass("endpoint_hidden")
        if($(this).hasClass("widget")===true){
          jsPlumb.selectEndpoints({source:$(this).attr("id")}).removeClass("endpoint_hidden")
        }
      });
    });

    $(window).scroll(function() {
      var height = $(window).scrollTop();

      if(height  > $('#demo').offset().top - 100) {

        $('.demo-panel').css('margin-left', '110px');

        $(".search-field").typed({
          strings: ["Paris"],
          typeSpeed: 200
        });

        setTimeout(
          function() {
            $('.draggable').fadeIn();
            $('.drag_and_drop_label').fadeIn();
            $.each($(".draggable"),function(key,value){
              if(jsPlumb.selectEndpoints({source:$(this).attr("id")}).length===0){
              _addEndpoints($(this).attr("id"),["RightMiddle"],[])
              _addEndpoints($(this).attr("id"),["LeftMiddle"],[])
              _addEndpoints($(this).attr("id"),["TopCenter"],[])
              _addEndpoints($(this).attr("id"),["BottomCenter"],[])
              }

            });
          }, 2000
        );
      }
    });
