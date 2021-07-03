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
<td {%- if feat.mutter == "-" -%}{% raw %} {% endraw %} class="wl-cell-bites" {%- endif -%}>{{ feat.mutter }}</td>
<td {%- if feat.kws == "-" -%}{% raw %} {% endraw %} class="wl-cell-bites" {%- endif -%}>{{ feat.kws }}</td>
<td {%- if feat.wlr == "-" -%}{% raw %} {% endraw %} class="wl-cell-bites" {%- endif -%}>{{ feat.wlr }}</td>
<td {%- if feat.mir == "-" -%}{% raw %} {% endraw %} class="wl-cell-bites" {%- endif -%}>{{ feat.mir }}</td>
<td {%- if feat.e == "-" -%}{% raw %} {% endraw %} class="wl-cell-bites" {%- endif -%}>{{ feat.e }}</td>
</tr>
{%- endfor -%}
{%- endfor -%}
</tbody>
</table>
