var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var cWidth = canvas.width;
var cHeight = canvas.height;

var changesMade = false;
var enableDrawing = false;
var initialMousePos;
var rectangleJSON;
var canvasBtns = document.querySelectorAll('.canvas-img-btn');
var currentCanvasMode = canvasBtns[0].getAttribute('id');

var showAllHighlightsToolStatus = false;
var realImgSizeToolStatus = false;

// toggle tools
var functionTools = document.querySelectorAll('.function-tool');
for( var i = 0; i < functionTools.length; i++ ) {
    functionTools[i].addEventListener('click', toggleTools);
}

function toggleTools() {
    var id = this.getAttribute('id');
    document.querySelectorAll('.active-tool')[0].classList.remove('active-tool');
    this.classList.add('active-tool');
    // rectangle tool
    if( id == 'rectangle-tool' && showAllHighlightsToolStatus ) {
        ctx.clearRect(0, 0, cWidth, cHeight);
    }
    // real size tool
    if( id == 'real-size-tool' ) {
        realImgSizeToolStatus = true;
        canvas.classList.add('real-img-size');
        ctx.clearRect(0, 0, cWidth, cHeight);
    } else if( canvas.classList.contains('real-img-size') ) {
        realImgSizeToolStatus = false;
        canvas.classList.remove('real-img-size');       
    }
    // show all shapes
    if( id == 'show-all-highlights-tool' ) {
        showAllHighlightsToolStatus = true;
        identifyHoveredNoteShape(false, true);
    } else {
        showAllHighlightsToolStatus = false;
    }
}

// canvas events
canvas.addEventListener('mousedown', function(e) {
    enableDrawing = true;
    rectangleJSON = '';
    initialMousePos = [e.clientX - canvas.offsetLeft, e.clientY - (canvas.offsetTop - window.scrollY)];
    // if show all highlights is active
    if( showAllHighlightsToolStatus ) {
        functionTools[0].click();
    }
});
canvas.addEventListener('mouseup', function() {
    enableDrawing = false;
    if( rectangleJSON !== '' ) {
        createNote();
        changesMade = true; // changes made
    }
    rectangleJSON = '';
});
canvas.addEventListener('mousemove', function(e) {
    if( enableDrawing ) {
        var clientX = e.clientX - canvas.offsetLeft;
        var clientY = e.clientY - (canvas.offsetTop - window.scrollY);
        drawRectangle(clientX, clientY);
    }
});
document.body.addEventListener('mouseup', function() {
    if( enableDrawing && rectangleJSON !== '' ) {
        createNote();
        enableDrawing = false;
        rectangleJSON = '';
    }
});

// draw rectangle
ctx.lineWidth = '3';
function drawRectangle(clientX, clientY) {
    var canvasMode = currentCanvasMode,
        rectPosX = initialMousePos[0],
        rectPosY = initialMousePos[1],
        rectWidth = clientX - initialMousePos[0],
        rectHeight = clientY - initialMousePos[1];
    ctx.clearRect(0, 0, cWidth, cHeight);
    ctx.strokeStyle = 'red';
    ctx.strokeRect(rectPosX, rectPosY, rectWidth, rectHeight);
    ctx.strokeStyle = 'white';
    ctx.lineWidth = '2';
    ctx.strokeRect(rectPosX - 2, rectPosY - 2, rectWidth + 4, rectHeight + 4);
    ctx.strokeRect(rectPosX + 2, rectPosY + 2, rectWidth - 4, rectHeight - 4);
    rectangleJSON = {canvasMode, rectPosX, rectPosY, rectWidth, rectHeight}
}

// create note
var corrections = document.querySelector('#corrections');
var noCorrectionsNotice = document.querySelector('#no-corrections-notice');
function createNote(noteText, jsonStr) {
    // when note json is from database
    if( jsonStr ) {
        var noteAttrJSON = jsonStr;
        var noteCanvasMode = JSON.parse(jsonStr).canvasMode;
        var text = noteText;
        var noteStatus = 'mark-note-' + JSON.parse(jsonStr).noteStatus;
    } else {
        var noteAttrJSON = JSON.stringify(rectangleJSON);
        var noteCanvasMode = currentCanvasMode;
        var text = '';
        var noteStatus = '';
    }
    document.querySelector('#mark-notes-corrected').insertAdjacentHTML('afterend', `
        <div class="correction-note note-canvas-mode-`+ noteCanvasMode +` `+ noteStatus +`" data-shapes='`+ noteAttrJSON +`'>
            <ul>
                <li><i class="note-check-btn icon ion-ios-checkmark-outline"></i></li>
                <li><i class="note-close-btn icon ion-ios-minus-outline"></i></li>
                <li class="float-right-btn"><i class="note-delete-btn icon ion-ios-close-outline"></i></li>
            </ul>
            <div class="note" contenteditable="true">`+ text +`</div>
        </div>
    `);
    var latestNote = corrections.querySelectorAll('.correction-note')[0];
    noCorrectionsNotice.style.display = 'none';
    corrections.querySelectorAll('.correction-note .note')[0].focus();
    latestNote.addEventListener('mouseenter', identifyHoveredNoteShape); // add mouseenter event to new note
    latestNote.addEventListener('focusout', updateNodeText); // add focusout event to new note
    latestNote.querySelector('.note-check-btn').addEventListener('click', markNote);
    latestNote.querySelector('.note-close-btn').addEventListener('click', markNote);
    latestNote.querySelector('.note-delete-btn').addEventListener('click', markNote);
}

// notes hovered
function identifyHoveredNoteShape(e, multipleNotes) {
    // when showing all highlights, or hovering over individual note
    if( !multipleNotes ) {
        var target = e.target || e.srcElement;
        var targetLength = 1;
        if( showAllHighlightsToolStatus ) { functionTools[0].click() }
    } else {
        var target = document.querySelectorAll('.correction-note.note-canvas-mode-' + currentCanvasMode);
        var targetLength = target.length;
    }
    // loop through all notes
    for( var i = 0; i < targetLength; i++ ) {
        var thisTarget = !multipleNotes ? target : target[i];
        var shapeJSON = JSON.parse( thisTarget.getAttribute('data-shapes') );
        !multipleNotes ? ctx.clearRect(0, 0, cWidth, cHeight) : null; // do not clear if showing all notes (if statement)
        ctx.strokeStyle = 'red';    
        ctx.strokeRect(shapeJSON.rectPosX, shapeJSON.rectPosY, shapeJSON.rectWidth, shapeJSON.rectHeight);
        ctx.strokeStyle = 'white';
        ctx.lineWidth = '2';    
        ctx.strokeRect(shapeJSON.rectPosX - 2, shapeJSON.rectPosY - 2, shapeJSON.rectWidth + 4, shapeJSON.rectHeight + 4);
        ctx.strokeRect(shapeJSON.rectPosX + 2, shapeJSON.rectPosY + 2, shapeJSON.rectWidth - 4, shapeJSON.rectHeight - 4);
    }
    // scroll hovered target into view
    if( !multipleNotes ) { scrollHoveredTargetIntoView(shapeJSON.rectPosY, shapeJSON.rectHeight) };
    // real size off
    if( realImgSizeToolStatus ) {
        functionTools[0].click();
    }
}

// scroll hovered target into view
function scrollHoveredTargetIntoView(rectPosY, rectHeight) {
    /*var windowHeight = window.innerHeight,
        windowScrollY = window.scrollY,
        canvasTopPos = canvas.offsetTop,
        shapeTop = canvasTopPos + rectPosY,
        shapeBottom = rectHeight + rectPosY

        console.log(shapeTop, shapeBottom);
    if( shapeBottom < 0 || shapeTop - windowHeight >= 0 ) {
        alert('scroll');
    }*/
}

// update note text on focus out
function updateNodeText(event) {
    var target = event.target || event.srcElement;
    var targetParent = target.parentElement;
    var noteJSON = JSON.parse( targetParent.getAttribute('data-shapes') );
    noteJSON.noteText = target.textContent;
    targetParent.setAttribute('data-shapes', JSON.stringify(noteJSON));
}

// mark notes
function markNote(event) {
    var target = event.target || event.srcElement;
    var parentNoteEl = findParentElement(target, 'correction-note');
    var parentNoteElJSON = JSON.parse(parentNoteEl.getAttribute('data-shapes'));
    if( target.classList.contains('note-check-btn') ) {
        parentNoteEl.classList.remove('mark-note-close');
        parentNoteEl.classList.add('mark-note-check');
        parentNoteElJSON['noteStatus'] = 'check';
    } else if( target.classList.contains('note-close-btn') ) {
        parentNoteEl.classList.remove('mark-note-check');
        parentNoteEl.classList.add('mark-note-close');
        parentNoteElJSON['noteStatus'] = 'close';        
    } else if( target.classList.contains('note-delete-btn') ) {
        parentNoteEl.remove();
        ctx.clearRect(0, 0, cWidth, cHeight);
    }
    parentNoteEl.setAttribute('data-shapes', JSON.stringify(parentNoteElJSON)); // update json to note element
    changesMade = true; // changes made
}

// mark all notes as corrected
document.querySelector('#mark-notes-corrected').addEventListener('click', function() {
    var notesCheckBtn = corrections.querySelectorAll('.correction-note .note-check-btn');
    console.log(notesCheckBtn)
    for( var i = 0; i < notesCheckBtn.length > 0; i++ ) {
        notesCheckBtn[i].click();
    }
    // save
    document.querySelector('#save').click();
});

// switch canvas mode
var pageMainElement = document.getElementsByTagName('main')[0];
var realSizeIMG = document.querySelector('#real-size-image');
// activate first btn
canvasBtns[0].classList.add('active-tool');
pageMainElement.classList.add('note-canvas-mode-' + canvasBtns[0].getAttribute('id')); // initial canvas mode show corresponding notes
for( var i = 0; i < canvasBtns.length; i++ ) {
    canvasBtns[i].addEventListener('click', function() {
        // toggle active class
        currentCanvasMode = this.getAttribute('id');
        canvasBtns.forEach(function(element) {
            element.classList.remove('active-tool');
        });
        this.classList.add('active-tool');
        // switch image
        var canvasModeImageName = document.querySelector('#' + currentCanvasMode).getAttribute('data-canvas-img-name');
        canvas.style.backgroundImage = 'url("img/' + canvasModeImageName +'")';
        realSizeIMG.setAttribute('src', 'img/' + canvasModeImageName);
        // hide/show corresponding notes
        pageMainElement.classList.remove('note-canvas-mode-page', 'note-canvas-mode-banner', 'note-canvas-mode-coupon', 'note-canvas-mode-big-banner',  'note-canvas-mode-page2', 'note-canvas-mode-banner2', 'note-canvas-mode-coupon2', 'note-canvas-mode-big-banner2');
        pageMainElement.classList.add('note-canvas-mode-' + currentCanvasMode);
        ctx.clearRect(0, 0, cWidth, cHeight); // reset canvas
        // if showing all highlights is enabled
        if( showAllHighlightsToolStatus ) {
            identifyHoveredNoteShape(false, true);
        }
    });
}

// convert notes to single json string and submit via form
var editorHiddenForm = document.querySelector('#editor-hidden-form');
var editorHiddenFormInput = editorHiddenForm.querySelector('input[name="note_json"]');
var editorHiddenFormCorrectedCheck = editorHiddenForm.querySelector('input[name="corrected_bool"]');
document.querySelector('#save').addEventListener('click', function() {
    var allNotes = document.querySelectorAll('#corrections .correction-note');
    var allNotesJSONCollection = [];
    changesMade = false; // changes made
    for( var i = 0; i < allNotes.length; i++ ) {
        var json = JSON.parse( allNotes[i].getAttribute('data-shapes') );
        allNotesJSONCollection.push(json);
    }
    // update input value
    if( allNotesJSONCollection.length ) {
        editorHiddenFormInput.value = JSON.stringify(allNotesJSONCollection);
    } else {
        editorHiddenFormInput.value = 'none';
    }
    // determine if all notes were corrected and update checkbox value
    var totalNotes = corrections.querySelectorAll('.correction-note').length;
    var correctedNotes = corrections.querySelectorAll('.correction-note.mark-note-check').length;
    if( totalNotes == correctedNotes ) {
        editorHiddenFormCorrectedCheck.checked = true;
    } else if( totalNotes > correctedNotes ) {
        editorHiddenFormCorrectedCheck.checked = false;        
    }
    editorHiddenForm.submit();
});

// apply saved notes json
var dataSavedCorrectionsAttr = corrections.getAttribute('data-saved-corrections-json');
if( dataSavedCorrectionsAttr !== 'none' && dataSavedCorrectionsAttr !== '' ) {
    var savedJSON = JSON.parse(dataSavedCorrectionsAttr);
    for( var i = 0; i < savedJSON.length; i++ ) {
        var noteText = savedJSON[i].noteText.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
        var jsonStr = JSON.stringify(savedJSON[i]);
        createNote(noteText, jsonStr);
    }
}

// before closing alert
window.onbeforeunload = function(event) {
    if( changesMade ) {
        return 'Make sure you saved changes.';
    }
}



// find parent element function
function findParentElement(target, cls) {
    while ( (target = target.parentElement) && !target.classList.contains(cls) );
    return target;
}
