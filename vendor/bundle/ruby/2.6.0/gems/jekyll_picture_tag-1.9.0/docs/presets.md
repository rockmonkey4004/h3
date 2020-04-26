---
---

# Writing Presets

Presets are named collections of settings that determine basically everything about JPT's output.
They are stored in `_data/picture.yml`, to avoid cluttering `_config.yml`. You will have to create
this file, and probably the `_data/` directory as well.

Here's an [example data file]({{ site.baseurl }}/example_presets).

Any settings which are specific to particular output formats are documented on the [output
formats]({{site.baseurl}}/output) page.

## Required Knowledge

If you don't know the difference between resolution switching and art direction, stop now and read
the [MDN Responsive Images
guide](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
in detail. Ideally, play around with a basic HTML file, a few test images, and a few different
browser widths until you understand it.

## Media Presets

*Format:*

```yml
media_presets:
  (name): (css media query)
  (name): (css media query)
  (...)

```

*Example:*

```yml
media_presets:
  desktop: 'min-width: 1200px'
```

These are named media queries for use in a few different places: specifying alternate source images
in your liquid tag, building the 'sizes' attribute within your presets, and in a few configuration
settings. Quotes are recommended around the media queries, because yml gets confused by colons.

## Markup Presets

*Format:*

```yml
markup_presets:
  (name):
    (option): (setting)
    (option): (setting)
    (...)
  (...)
```

*Example:*

```yml
markup_presets:
  default:
    formats: [webp, original]
    widths: [200, 400, 800, 1600]
    link_source: true
  lazy:
    markup: data_auto
    widths: [200, 400, 800, 1600]
    link_source: true
    noscript: true
```

Each entry is a pre-defined collection of settings to build a given chunk of text (usually HTML) and
its respective images. You can select one as the first argument given to the tag:

{% raw %}
`{% picture my-preset image.jpg %}`
{% endraw %}

The `default` preset will be used if none is specified. A preset name can't contain a `.` (period).

#### A Note on srcsets

For images that are different sizes on different screens (most images), use a width-based srcset
(which is the default). Specify a `widths` setting (or don't, for the default set), and optionally
the `sizes` and `size` settings. 

Use a multiplier-based srcset when the image will always be the same size, regardless of screen
width (thumbnails and icons). To use a multiplier-based srcset, set `pixel_ratios` and `base_width`.

### Settings reference

* **Markup format**

  *Format:* `markup: (setting)`

  *Default*: `auto`

  Defines what format the generated text will take. They are documented [here]({{ site.baseurl }}/output).

 
* **Image Formats**

  *Format:* `format: [format1, format2, (...)]`  

  *Example:* `format: [webp, original]`

  *Default*: `original`

  Array (yml sequence) of the image formats you'd like to generate, in decreasing order of
  preference. Browsers will render the first format they find and understand, so **If you put jpg
  before webp, your webp images will never be used**. `original` does what you'd expect. To supply
  webp, you must have an imagemagick webp delegate installed. (Most package managers just name it
  'webp')

  *Supported formats are anything which imagemagick supports, and has an installed delegate. See a
  list by running `$ convert --version`*

* **Widths**

  *Format:* `widths: [integer, integer, (...)]`

  *Example:* `widths: [600, 800, 1200]`

  *Default*: `[400, 600, 800, 1000]`

  Array of image widths to generate, in pixels. For use when you want a width-based srcset
  (`srcset="img.jpg 800w, img2.jpg 1600w"`).

* **Media_widths**

    *Format:*

  ```yml
  media_widths:
    (media preset name): [integer, integer, (...)]
  ```

    *Example:*

  ```yml
  media_widths:
    mobile: [400, 600, 800]
  ```

    *Default:* Widths setting

  If you are using art direction, there is no sense in generating desktop-size files for your mobile
  image. You can specify sets of widths to associate with given media queries. If not specified,
  will use `widths` setting.

* **Sizes**

    *Format:*

  ```yml
  sizes:
    (media preset): (CSS dimension)
    (...)
  ```

    *Example:*

  ```yml
  sizes:
    mobile: 80vw
    tablet: 60vw
    desktop: 900px
  ```

  Conditional sizes, used to construct the `sizes=` HTML attribute telling the browser how wide your
  image will be (on the screen) when a given media query is true. CSS dimensions can be given in
  `px`, `em`, or `vw`. To be used along with a width-based srcset.

  Provide these in order of most restrictive to least restrictive. The browser will choose the 
  first one with an applicable media query.

  You don't have to provide a sizes attribute at all. If you don't, the browser will assume the
  image is 100% the width of the viewport.

* **Size**

  *Format:* `size: (CSS Dimension)`

  *Example:* `size: 80vw`

  Unconditional `sizes` setting, to be supplied either alone or after all conditional sizes.

* **Pixel Ratios**

  *Format:* `pixel_ratios: [number, number, number (...)]`

  *Example:* `pixel_ratios: [1, 1.5, 2]`

  Array of images to construct, given in multiples of the base width. If you set this, you must also
  give a `base_width`.

  Set this when you want a multiplier based srcset (example: `srcset="img.jpg 1x, img2.jpg 2x"`).

* **Base Width**

  *Format:* `base_width: integer`

  *Example:* `base_width: 100`

  When using pixel ratios, you must supply a base width. This sets how wide the 1x image should be.

* **Quality**

  *Format:* `quality: 0 <= integer <= 100`

  *Example:* `quality: 80`

  *Default:* `75`

  This allows you to specify an image compression level for all image formats (where it makes sense,
  anyway). The next option allows you to set them per format.

* **Format Quality**

  *Format:* 

  ```yml
  format_quality:
    (format): 0 <= integer <= 100
    (...)
  ```

  *Example:*

  ```
  format_quality:
    jpg: 75
    png: 65
    webp: 55
  ```

  *Default:* quality setting (above)

  This allows you to specify quality settings for various image formats, allowing you to take
  advantage of webp's better compression algorithm without trashing your jpg images (for example).
  If you don't give a setting for a particular format it'll fall back to the `quality` setting
  above, and if you don't set *that* it'll default to 75.

* **HTML Attributes**

  *Format:*

  ```yml
  attributes:
    (element): '(attributes)'
    (...)
  ```

  *Example:*

  ```yml
  attributes:
    img: 'class="soopercool" data-awesomeness="11"'
    picture: 'class="even-cooler"'
  ```

  HTML attributes you would like to add.  The same arguments are available here as in the liquid
  tag: HTML element names, `alt:`, `link:`, and `parent:`. Unescaped double quotes cause problems
  with yml, so it's recommended to surround them with single quotes.

* **Fallback Width**

    *Format:* `fallback_width: (integer)`             

    *Example:* `fallback_width: 800`

    *Default*: `800`

  Width of the fallback image.

* **Fallback Format**

    *Format:*  `fallback_format: (format)`

    *Example:* `fallback_format: jpg`

    *Default*: `original`

  Format of the fallback image

* **Source Image Link**

    *Format:* `link_source: (true|false)`

    *Example:* `link_source: true`

    *Default:* `false`

  Surround image with a link to the original source file. Your source image directory must be
  published as part of the compiled site. If you run into weird issues with the output, see
  the [notes]({{ site.baseurl }}/notes).

* **Nomarkdown override**
   
    *Format:* `nomarkdown: (true|false)`

    *Example:* `nomarkdown: false`

    *Default:* `nil`

  Hard setting for `{::nomarkdown}` tags, overrides both autodetection and the global setting in
  `_config.yml`. See the [notes]({{ site.baseurl }}/notes) for a detailed explanation. 
