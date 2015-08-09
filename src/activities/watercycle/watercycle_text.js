/* GCompris - watercycle_text.js
 *
 * Copyright (C) 2015 Sagar Chand Agarwal <atomsagar@gmail.com>
 *
 * Authors:
 *   Bruno Coudoin <bruno.coudoin@gcompris.net>(GTK+ version)
 *   Sagar Chand Agarwal <atomsagar@gmail.com> (Qt Quick port)
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

var dataset = {
    "none": "",
    "start": qsTr("Sun is the main component of water cycle. Click on the sun to start the water cycle."),
    "sun": qsTr("As the sun rises, the temperature of the sea starts heating and evaporate."),
    "vapor":  qsTr("Due to evaporation, water gets heated to form water vapor."),
    "cloud": qsTr("Water vapor condenses to form cloud and when they become heavy, they rain. Click on the cloud."),
    "rain": qsTr("Rain causes rivers to swell up and this water is transported to us via motor pumps through water-tower." +
                 " Click on the motor pump to supply water to residents."),
    "tower": qsTr("See the tower filled with water. Activate the waste station by clicking on it."),
    "shower": qsTr("Great, Click on the shower, as Tux arrives home. "),
    "bluepipe": qsTr("The blue pipes bring fresh water to residents including Tux bathroom." +
                     " After usage, the used water, now waste, is sent to sewage water station."),
    "seawage": qsTr("Click on the seawage treatment plant to activate it."),
    "tosea": qsTr("The sewage is collected from homes in brown pipes and after treatment it is flowed to river bodies."),
    "done":  qsTr("Fantastic, you have completed water cycle. You can continue playing.")
}