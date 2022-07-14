---
title: Introduction
---
# Introduction

Profectus is a web-based game engine. You can write your content using many built in features, write your own features, and build up complex gameplay quickly and easily.

The purpose of creating profectus was to create an easy to use engine that does not create a ceiling for a programmer's personal growth. This engine will grow in complexity with you, empowering you to create increasingly complex designs and mechanics.

## Should you use Profectus?

While this engine is intended to make game development (and web app development) easier, it still requires you to be comfortable with programming in general and javascript in particular. Fortunately, that is a solvable problem.

If you've never used Javascript before, [learn-js.org](https://www.learn-js.org/) is a good resource for learning the important concepts. If you'd like a more thorough lesson on all the ins and outs of web development, [javascript.info](https://javascript.info) and [MDN's tutorials](https://developer.mozilla.org/en-US/docs/Learn/JavaScript) should have you covered. MDN is also a great resource to use as a reference - for example, if you want to know more about something and you google it, there'll typically be a MDN link that'll explain it thoroughly.

Beyond the basics, Profectus uses a modern web development pipeline, using tools like node, typescript, and JSX. While most of it should be relatively easy to pick up through context, if this becomes too complicated you may be interested in [The Modding Tree](https://github.com/Acamaeda/The-Modding-Tree/), a predecessor of Profectus that uses plain old javascript.

### Alternative Engines

There are many popular game engines out there, such as [GameMaker Studio 2](https://www.yoyogames.com/), [Unity3D](https://unity.com), [Unreal Engine 4](https://www.unrealengine.com/), and [Godot](https://godotengine.org), that are all general purpose and also more useful if you're planning on going into a career in game development. These are all more mature and robust game engines compared to Profectus, and are used by actual game development studios.

Profectus, on the other hand, is a very opinionated engine that is better at specific types of projects. Where the above engines will require you to design and create your own interfaces, menus, save management systems, etc. Profectus will include those out of the box. Profectus will also output games that run natively in the browser, and will typically be easier for players to play than traditional engines.

If you are not interested in programming but still want to get into game development, the above engines also all support "visual programming", which may be more amenable to you. Each engine will have varying levels of support, and of course with varying complexities, but ultimately any of these will help you learn the concepts of programming and game development, and all of them also offer traditional programming for when you think you're ready.

## Design Philosophies

While absolute purity is impossible, design decisions have been and will continue to be made using these principles in mind.

- An engine should be intuitive, and code readable without context
- An engine should not constrain a creator
- An engine should be consistent
- An engine should be extensible, and those extensions sharable
- An engine should be efficient
- An engine should report issues early and thoroughly
- Passing by reference is one honking great idea -- [let's do more of that](https://www.python.org/dev/peps/pep-0020/)!
	- See [Refs are better than reactive objects](https://dev.to/ycmjason/thought-on-vue-3-composition-api-reactive-considered-harmful-j8c)
