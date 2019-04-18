# Simple JavaScript widget library

This library was created many years ago just for check how can be realized
dynamic site building.

The main thing is: any UI element is _Widget_. In common case it is an _abstract_ 
object (initially _Widget_ does not have html implementation, and on direct using 
it will fail).

At the moment is realized:
 - Widget
 -- Panel
 --- MenuPanel
 -- Button
 -- MenuLink
 -- Alert (??!! buggy)