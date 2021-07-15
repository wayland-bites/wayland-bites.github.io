---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---
<table class="wayland-bites-table">
<colgroup>
<col>
<col span="7" class="wayland-compositor">
</colgroup>
<thead>
<tr>
<th scope="col" rowspan="2" class="wayland-bites-column-th">X.Org</th>
<th scope="col" rowspan="2" class="wayland-bites-column-th">GNOME/Mutter</th>
<th scope="col" colspan="2" class="wayland-bites-column-th">KWindowSystem<br><small>(KWin/LXQt)</small></th>
<th scope="col" colspan="2" class="wayland-bites-column-th">wlroots<br><small>(Sway / Wayfire / Phoc / etc.)</small></th>
<th scope="col" rowspan="2" class="wayland-bites-column-th">Mir<br><small>(MATE?)</small></th>
<th scope="col" rowspan="2" class="wayland-bites-column-th">Enlightenment</th>
</tr>
<tr>
<th class="wayland-bites-subcolumn-th">KWin</th>
<th class="wayland-bites-subcolumn-th">any</th>
<th class="wayland-bites-subcolumn-th">Sway (IPC)</th>
<th class="wayland-bites-subcolumn-th">any</th>
</tr>
</thead>
<tbody>
{%- for group in site.xorgfeats -%}
<tr class="intra-tr">
<th colspan="8" class="intra-th">
<button class="group-collapse-button">-</button>
{{ group.group }}
</th>
</tr>
{%- for feat in group.feats -%}
<tr>
<th scope="row" class="wayland-bites-row-th" title="{{ feat.name }}">
{%- if feat.usage -%}
<details>
<summary>{{ feat.name }}</summary>
<small>{{ feat.usage }}</small>
</details>
{%- else -%}
{{ feat.name }}
{%- endif -%}
</th>
{%- assign cells = "" | split: ',' -%}
{%- assign cells = cells | push: feat.mutter -%}
{%- assign cells = cells | push: feat.kwin -%}
{%- assign cells = cells | push: feat.kws -%}
{%- assign cells = cells | push: feat.sway -%}
{%- assign cells = cells | push: feat.wlr -%}
{%- assign cells = cells | push: feat.mir -%}
{%- assign cells = cells | push: feat.e -%}

{%- for cell in cells -%}

{%- assign colspan = 1 -%}

{%- if forloop.index == 2 or forloop.index == 4 -%}
{%- unless cell -%}
{%- continue -%}
{%- endunless -%}
{%- elsif forloop.index == 3 -%}
{%- unless feat.kwin -%}
{%- assign colspan = 2 -%}
{%- endunless -%}
{%- elsif forloop.index == 5 -%}
{%- unless feat.sway -%}
{%- assign colspan = 2 -%}
{%- endunless -%}
{%- endif -%}

{%- assign celltokens = cell | split: '^' -%}
{%- assign cellcontent = celltokens[0] -%}
<td
{% if cellcontent == "-" %}
class="wl-cell-bites"
{% elsif celltokens.size >= 2 %}
class="wl-cell-licks"
{% elsif cellcontent and cellcontent != "?" %}
class="wl-cell-calm"
{% endif %}
 colspan="{{ colspan }}"
>{{ cellcontent }}
{%- if celltokens.size >= 2 -%}
{%- for token in celltokens -%}
{%- if forloop.index >= 2 -%}
<sup class="footnote-link"><a href="#footnote{{token}}">{{token}}</a></sup>
{%- endif -%}
{%- endfor -%}
{%- endif -%}
</td>
{%- endfor -%}
</tr>
{%- endfor -%}
{%- endfor -%}
</tbody>
</table>

<hr>
{%- for footnote in site.footnotes -%}
<small>
  <sup id="footnote{{ forloop.index }}">{{ forloop.index }}</sup>
  {{ footnote }}
</small><br>
{%- endfor -%}
