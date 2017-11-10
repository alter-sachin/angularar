AFRAME.registerComponent('drag-rotate-component', {
    schema: {
        speed: {
            default: 1
        }
    },
    init: function() {
        this.ifMouseDown = false;
        this.x_cord = 0;
        this.y_cord = 0;
        document.addEventListener('mousedown', this.OnDocumentMouseDown.bind(this));
        document.addEventListener('mouseup', this.OnDocumentMouseUp.bind(this));
        document.addEventListener('mousemove', this.OnDocumentMouseMove.bind(this));
        // document.addEventListener('touchmove', this.OnDocumentMouseMove.bind(this));
    },
    OnDocumentMouseDown: function(event) {
        this.ifMouseDown = true;
        this.x_cord = event.clientX;
        this.y_cord = event.clientY;
    },
    OnDocumentMouseUp: function() {
        this.ifMouseDown = false;
    },
    OnDocumentMouseMove: function(event) {
        if (this.ifMouseDown) {
            var temp_x = event.clientX - this.x_cord;
            var temp_y = event.clientY - this.y_cord;
            if (Math.abs(temp_y) < Math.abs(temp_x)) {
                this.el.object3D.rotateY(-temp_x * this.data.speed / 200);
            } else {
                this.el.object3D.rotateX(-temp_y * this.data.speed / 200);
            }
            this.x_cord = event.clientX;
            this.y_cord = event.clientY;
        }
    }
});



function toggleCategory() {
    // get the category
    var myCategory = document.getElementById('show_category');

    // get the current value of the clock's display property
    var displaySetting = myCategory.style.display;

    // also get the hamburger button, so we can change what it looks like ( cross icon and z-index high)
    var upButton = document.getElementById('up_icon');

    // now toggle the category and the icon, depending on current state
    if (displaySetting == 'block') {
        // clock is visible. hide it
        myCategory.style.display = 'none';
        // change button text
        //categoryButton.innerHTML = 'Show';
    } else {
        // clock is hidden. show it
        myCategory.style.display = 'block';
        // change button text
        // clockButton.innerHTML = 'Hide';
    }
}
var state = true;

function onClick() {
    var entity1 = document.getElementById('donut1');
    entity1.setAttribute('gltf-model-next', 'src: url(./models/donuts/2/scene.gltf);');
    // var entity2 = document.getElementById('donut2');
    // entity2.setAttribute('visible', state);
    // state = !state;
    // entity1.setAttribute('visible', state);
    // state = !state;
    // console.log('State now', state);
    // entity.setAttribute('visible', state);
}


function startCibo() {
    // body...
    var intro_screen = document.getElementById('intro_screen');
    var main_bar = document.getElementById('main_bar_1');
    intro_screen.style.display = 'none';
    main_bar.style.display = 'block';
    //var intro_screen = document.getElementById('');
}

function displaySub(){
    var submenus = document.getElementsByClassName('sub_menu').childNodes;
    var i ;
    console.log(submenus);
    console.log(i);
   //for(i = 0;i<submenus.length;i++){
   // console.log()
   //}
}