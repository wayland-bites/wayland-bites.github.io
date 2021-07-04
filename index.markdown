---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---
<table>
<colgroup>
<col>
<col span="5" class="wayland-compositor">
</colgroup>
<thead>
<tr>
<td></td>
<th scope="col">GNOME/Mutter</th>
<th scope="col">KWindowSystem<br><small>(KWin/LXQt)</small></th>
<th scope="col">wlroots<br><small>(Sway/Wayfire/etc.)</small></th>
<th scope="col">Mir<br><small>(MATE?)</small></th>
<th scope="col">Enlightenment</th>
</tr>
</thead>
<tbody>
{%- for group in site.xorgfeats -%}
<tr>
<th colspan="6" class="intra-th">{{ group.group }}</th>
</tr>
{%- for feat in group.feats -%}
<tr>
<th scope="row">{{ feat.name }}</th>
{%- assign cells = "" | split: ',' -%}
{%- assign cells = cells | push: feat.mutter -%}
{%- assign cells = cells | push: feat.kws -%}
{%- assign cells = cells | push: feat.wlr -%}
{%- assign cells = cells | push: feat.mir -%}
{%- assign cells = cells | push: feat.e -%}
{%- for cell in cells -%}
<td
{%- if cell == "-" -%}
{% raw %} {% endraw %} class="wl-cell-bites"
{%- endif -%}
>{{ cell }}</td>
{%- endfor -%}
</tr>
{%- endfor -%}
{%- endfor -%}
</tbody>
</table>
