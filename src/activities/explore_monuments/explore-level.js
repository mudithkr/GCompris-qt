/* GCompris - explore-level.js
*
* Copyright (C) 2015 Ayush Agrawal <ayushagrawal288@gmail.com>
*
* Authors:
*   Beth Hadley <bethmhadley@gmail.com> (GTK+ version)
*   Ayush Agrawal <ayushagrawal288@gmail.com> (Qt Quick port)
*   Djalil MESLI <djalilmesli@gmail.com> (Qt Quick port)
*
*   This program is free software; you can redistribute it and/or modify
*   it under the terms of the GNU General Public License as published by
*   the Free Software Foundation; either version 3 of the License, or
*   (at your option) any later version.
*
*   This program is distributed in the hope that it will be useful,
*   but WITHOUT ANY WARRANTY; without even the implied warranty of
*   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*   GNU General Public License for more details.
*
*   You should have received a copy of the GNU General Public License
*   along with this program; if not, see <http://www.gnu.org/licenses/>.
*/

.pragma library
.import GCompris 1.0 as GCompris
.import "qrc:/gcompris/src/core/core.js" as Core

var numberofLevels
var items
var url
var currentLevel

function start(items_,url_,levelcount_) {
    items = items_
    url = url_
    numberofLevels = levelcount_
    currentLevel = 1
    items.score.currentSubLevel = 1

    initLevel()
}

function stop() {
    items.audioEffects.stop()
}

function initLevel() {
    items.bar.level = (currentLevel)
    var filename = url + "board" + "/" + "board" + currentLevel + ".qml"
    items.dataset.source = filename
    items.progressbar.value = 0
    items.progressbar.maximumValue = items.dataModel.count
    items.score.numberOfSubLevels = items.hasAudioQuestions ? 3 : 2;
    // randomize the questions for level 2 and 3
    Core.shuffle(items.questionOrder);
    // Change the currentSubLevel value to 1 to be sure to update the question value
    // else if you are sublevel 0 and go to last level, the question is not the good one
    items.progressbar.value = 1
    items.progressbar.value = 0
    items.descriptionPanel.visible = false
    // Stop audio if necessary (switch from level 2 at beginning to a new level for example)
    items.audioEffects.stop()
    items.instruction.visible = true

    reload();
}

function nextLevel() {
    items.pause.running = true
    ++items.score.currentSubLevel
    if(numberofLevels <= currentLevel && items.score.numberOfSubLevels < items.score.currentSubLevel)
    {
        currentLevel = 0
    }
    if (items.score.numberOfSubLevels < items.score.currentSubLevel) {
        currentLevel++
        items.score.currentSubLevel = 1
    }
    initLevel();
    if (items.score.currentSubLevel == 2) {
        items.progressbar.value = 0;
        initSubSubLevel();
    }
}

function previousLevel() {
    --items.score.currentSubLevel
    if(currentLevel <= 1 && items.score.currentSubLevel < 1)
    {
        currentLevel = numberofLevels
        items.score.currentSubLevel = items.score.numberOfSubLevels
    }
    else if(items.score.currentSubLevel < 1) {
        currentLevel--
        items.score.currentSubLevel = items.score.numberOfSubLevels
    }
    initLevel();

    if(items.score.currentSubLevel == 2 && items.hasAudioQuestions) {
        items.audioEffects.play(getCurrentQuestion().audio);
    }
}

function isComplete() {
    for(var i = 0 ; i < items.dataModel.count ; ++ i) {
        if(!items.dataModel.itemAt(i).starVisible)
            return false;
    }
    return true;
}

function initSubSubLevel() {
    if(items.progressbar.value == items.dataModel.count) {
        items.bonus.good("smiley");
        items.pause.running = true
        items.progressbar.value = 0;
        nextLevel()
    }
     if(items.score.currentSubLevel == 2 && items.hasAudioQuestions) {
        items.audioEffects.play(getCurrentQuestion().audio);
    }
}

function nextSubSubLevel() {
    items.progressbar.value ++;
    initSubSubLevel()
}

function reload() {
    for(var i = 0 ; i < items.dataModel.count ; ++ i) {
        items.dataModel.itemAt(i).starVisible = false;
    }
}

function repeat() {
    items.audioEffects.play(getCurrentQuestion().audio);
}

function getCurrentQuestion() {
    return items.dataset.item.tab[items.questionOrder[items.progressbar.value]];
}
