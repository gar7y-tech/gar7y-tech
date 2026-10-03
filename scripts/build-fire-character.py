"""Procedural, editable reconstruction of the supplied MR ROBOT fire character.
Real mesh, weighted armature and named animation clips. Run in Blender 5.2.
No downloaded model or third-party identity; camera faces the original silhouette.
"""
import bpy, math
from mathutils import Vector
bpy.ops.object.select_all(action='SELECT'); bpy.ops.object.delete(use_global=False)
scene=bpy.context.scene
scene.render.engine='BLENDER_EEVEE'; scene.render.resolution_x=640; scene.render.resolution_y=800; scene.render.resolution_percentage=100
scene.render.film_transparent=True; scene.render.fps=30; scene.frame_start=1; scene.frame_end=120
scene.world=bpy.data.worlds.new('Soft studio world');scene.world.color=(.35,.35,.35)
def material(name,color,rough=.28,metal=.08,emission=0):
 m=bpy.data.materials.new(name); m.use_nodes=True
 p=m.node_tree.nodes.get('Principled BSDF');p.inputs['Base Color'].default_value=(*color,1);p.inputs['Roughness'].default_value=rough;p.inputs['Metallic'].default_value=metal
 if emission:p.inputs['Emission Color'].default_value=(*color,1);p.inputs['Emission Strength'].default_value=emission
 return m
red=material('Glossy vermilion shell',(.91,.032,.007),.22)
orange=material('Warm orange trim',(1,.18,.007),.25)
cream=material('Warm ivory face and body',(1,.77,.43),.29)
yellow=material('Golden flame',(1,.64,.015),.3,0,.16)
gold=material('Flame core',(1,.92,.15),.3,0,.16)
brown=material('Deep brown eyes and smile',(.045,.009,.003),.24,0)
pink=material('Coral cheek blush',(1,.20,.16),.38,0)
white=material('Soft eye highlights',(1,.97,.90),.16,0)
dark=material('Chest inset',(.24,.027,.002),.25,.12)
parts=[]
def finish(obj,name,mat,bone):
 obj.name=name;obj.data.materials.append(mat);parts.append((obj,bone))
 for p in obj.data.polygons:p.use_smooth=True
 return obj
def sphere(name,loc,scale,mat,bone):
 bpy.ops.mesh.primitive_uv_sphere_add(segments=32,ring_count=16,location=loc);o=bpy.context.object;o.scale=scale;bpy.ops.object.transform_apply(location=False,rotation=False,scale=True);return finish(o,name,mat,bone)
def box(name,loc,scale,radius,mat,bone):
 bpy.ops.mesh.primitive_cube_add(size=1,location=loc);o=bpy.context.object;o.scale=scale;bpy.ops.object.transform_apply(location=False,rotation=False,scale=True)
 b=o.modifiers.new('Soft moulded corners','BEVEL');b.width=radius;b.segments=5;bpy.context.view_layer.objects.active=o;bpy.ops.object.modifier_apply(modifier=b.name)
 n=o.modifiers.new('Weighted surface normals','WEIGHTED_NORMAL');bpy.ops.object.modifier_apply(modifier=n.name)
 return finish(o,name,mat,bone)
def tube(name,points,thickness,mat,bone):
 c=bpy.data.curves.new(name,'CURVE');c.dimensions='3D';c.bevel_depth=thickness;c.bevel_resolution=4;c.resolution_u=16
 s=c.splines.new('BEZIER');s.bezier_points.add(len(points)-1)
 for b,p in zip(s.bezier_points,points):b.co=p;b.handle_left_type='AUTO';b.handle_right_type='AUTO'
 o=bpy.data.objects.new(name,c);bpy.context.collection.objects.link(o);bpy.context.view_layer.objects.active=o;o.select_set(True);bpy.ops.object.convert(target='MESH');o.select_set(False);return finish(o,name,mat,bone)
def flame(name,outline,depth,offset,mat):
 c=bpy.data.curves.new(name,'CURVE');c.dimensions='2D';c.fill_mode='BOTH';c.extrude=depth;c.bevel_depth=.035;c.bevel_resolution=3;c.resolution_u=12
 s=c.splines.new('BEZIER');s.bezier_points.add(len(outline)-1);s.use_cyclic_u=True
 for b,(x,z) in zip(s.bezier_points,outline):b.co=(x,z,0);b.handle_left_type='AUTO';b.handle_right_type='AUTO'
 o=bpy.data.objects.new(name,c);bpy.context.collection.objects.link(o);o.rotation_euler[0]=math.pi/2;o.location.y=offset;bpy.context.view_layer.objects.active=o;o.select_set(True);bpy.ops.object.convert(target='MESH');o.select_set(False);return finish(o,name,mat,'Flame')
def rounded_face(name,width,height,radius,y,depth,mat):
 c=bpy.data.curves.new(name,'CURVE');c.dimensions='2D';c.fill_mode='BOTH';c.extrude=depth/2;c.bevel_depth=.028;c.bevel_resolution=4
 points=[]
 for cx,cz,start in [(width/2-radius,height/2-radius,0),(-width/2+radius,height/2-radius,90),(-width/2+radius,-height/2+radius,180),(width/2-radius,-height/2+radius,270)]:
  for i in range(9):
   a=math.radians(start+i*90/8);points.append((cx+radius*math.cos(a),cz+radius*math.sin(a)))
 s=c.splines.new('POLY');s.points.add(len(points)-1);s.use_cyclic_u=True
 for p,(x,z) in zip(s.points,points):p.co=(x,z,0,1)
 o=bpy.data.objects.new(name,c);bpy.context.collection.objects.link(o);o.rotation_euler[0]=math.pi/2;o.location=(0,y,1.94);bpy.context.view_layer.objects.active=o;o.select_set(True);bpy.ops.object.convert(target='MESH');o.select_set(False);return finish(o,name,mat,'Head')
# Grounded feet, short articulated limbs and rounded torso.
sphere('Left cream foot',(-.27,-.03,.23),(.23,.29,.23),cream,'Foot_L')
sphere('Right cream foot',(.27,-.03,.23),(.23,.29,.23),cream,'Foot_R')
sphere('Left orange sole',(-.27,-.015,.105),(.235,.28,.072),orange,'Foot_L')
sphere('Right orange sole',(.27,-.015,.105),(.235,.28,.072),orange,'Foot_R')
sphere('Left short leg',(-.27,0,.44),(.145,.15,.22),cream,'Leg_L')
sphere('Right short leg',(.27,0,.44),(.145,.15,.22),cream,'Leg_R')
sphere('Ivory body',(0,0,.89),(.52,.30,.50),cream,'Torso')
sphere('Orange body outline',(0,.01,.83),(.535,.29,.46),orange,'Torso')
sphere('Ivory chest',(0,-.043,.91),(.505,.31,.47),cream,'Torso')
for sign,side in [(-1,'L'),(1,'R')]:
 sphere('Orange shoulder '+side,(sign*.52,0,1.02),(.18,.19,.21),orange,'Arm_'+side)
 sphere('Ivory upper arm '+side,(sign*.60,-.025,.91),(.17,.18,.245),cream,'Arm_'+side)
 sphere('Ivory forearm '+side,(sign*.66,-.055,.75),(.16,.19,.21),cream,'Forearm_'+side)
 sphere('Orange hand rim '+side,(sign*.67,-.065,.66),(.164,.19,.13),orange,'Hand_'+side)
 sphere('Rounded ivory hand '+side,(sign*.67,-.085,.70),(.16,.20,.15),cream,'Hand_'+side)
sphere('Chest orange surround',(0,-.332,.90),(.22,.045,.22),orange,'Torso')
sphere('Chest dark inset',(0,-.371,.90),(.177,.033,.177),dark,'Torso')
for i in [-1,0,1]:box('Chest golden bar '+str(i),(i*.083,-.408,.90),(.042,.025,.19 if i else .25),.02,yellow,'Torso')
# Iconic broad head: nested moulded shell and the same warm face proportions.
box('Red head shell',(0,0,1.94),(1.75,.62,1.15),.27,red,'Head')
rounded_face('Orange inner bezel',1.59,1.01,.24,-.235,.25,orange)
rounded_face('Ivory face',1.43,.86,.22,-.347,.15,cream)
for x,side in [(-.34,'L'),(.34,'R')]:
 sphere('Eye '+side,(x,-.442,1.98),(.079,.027,.127),brown,'Eye_'+side)
 sphere('Eye highlight '+side,(x-.020,-.465,2.055),(.021,.010,.021),white,'Eye_'+side)
 sphere('Cheek '+side,(x*1.30,-.483,1.745),(.112,.012,.073),pink,'Head')
 sphere('Cheek highlight '+side,(x*1.30-.031,-.496,1.776),(.020,.007,.012),white,'Head')
tube('Original friendly smile',[(-.077,-.451,1.79),(-.047,-.464,1.735),(0,-.466,1.72),(.047,-.464,1.735),(.077,-.451,1.79)],.027,brown,'Head')
sphere('Smile left rounded end',(-.077,-.451,1.79),(.027,.027,.027),brown,'Head')
sphere('Smile right rounded end',(.077,-.451,1.79),(.027,.027,.027),brown,'Head')
# Three-dimensional flame with layered warm colour volumes.
flame('Outer red flame',[(-.40,2.49),(-.54,2.62),(-.54,2.92),(-.32,3.04),(-.31,2.90),(-.13,3.10),(-.07,3.27),(-.18,3.55),(.21,3.38),(.37,3.14),(.34,2.85),(.48,2.77),(.57,3.03),(.62,2.79),(.55,2.59),(.41,2.49)],.12,.03,red)
flame('Orange flame face',[(-.40,2.52),(-.47,2.69),(-.37,2.84),(-.25,2.75),(-.18,3.06),(-.03,2.95),(.035,3.45),(.25,3.25),(.33,2.94),(.43,2.72),(.51,2.85),(.48,2.59),(.33,2.51)],.06,-.125,orange)
flame('Yellow inner fire',[(-.29,2.52),(-.32,2.70),(-.20,2.91),(-.05,2.79),(.11,3.17),(.22,2.98),(.20,2.74),(.33,2.79),(.37,2.60),(.24,2.52)],.025,-.205,yellow)
flame('Golden flame core',[(-.16,2.54),(-.19,2.65),(-.05,2.78),(.06,2.70),(.13,2.97),(.20,2.83),(.14,2.68),(.22,2.61),(.15,2.54)],.008,-.255,gold)
# Weighted rig: every mesh belongs to a semantic skeletal joint, not a picture plane.
bpy.ops.object.armature_add(enter_editmode=True,location=(0,0,0));rig=bpy.context.object;rig.name='MR_ROBOT_Fire_Rig';arm=rig.data;arm.name='FireCharacterSkeleton';arm.edit_bones.remove(arm.edit_bones[0])
defs=[('Root',(0,0,.1),(0,0,.5),None),('Torso',(0,0,.55),(0,0,1.20),'Root'),('Head',(0,0,1.38),(0,0,2.40),'Torso'),('Flame',(0,0,2.47),(0,0,3.45),'Head')]
for sign,side in [(-1,'L'),(1,'R')]:
 defs += [('Arm_'+side,(sign*.50,0,1.10),(sign*.62,0,.88),'Torso'),('Forearm_'+side,(sign*.62,0,.88),(sign*.67,0,.71),'Arm_'+side),('Hand_'+side,(sign*.67,0,.71),(sign*.67,0,.61),'Forearm_'+side),('Leg_'+side,(sign*.27,0,.56),(sign*.27,0,.30),'Root'),('Foot_'+side,(sign*.27,0,.30),(sign*.27,-.17,.13),'Leg_'+side),('Eye_'+side,(sign*.34,-.44,1.98),(sign*.34,-.44,2.10),'Head')]
for name,head,tail,parent in defs:
 b=arm.edit_bones.new(name);b.head=head;b.tail=tail
 if parent:b.parent=arm.edit_bones[parent]
bpy.ops.object.mode_set(mode='OBJECT');rig.show_in_front=True
for obj,bone in parts:
 vg=obj.vertex_groups.new(name=bone);vg.add(list(range(len(obj.data.vertices))),1,'REPLACE');mod=obj.modifiers.new('Skeletal deformation','ARMATURE');mod.object=rig;obj.parent=rig
# Explicit, smooth portable clips. Contact stays grounded; short legs counterbalance arms.
rig.animation_data_create()
clips={
 'idle':[(1,0),(31,1),(61,0),(91,-1),(121,0)],
 'greeting':[(1,0),(15,1),(30,.55),(45,1),(60,.55),(85,0)],
 'listening':[(1,0),(18,1),(45,1),(65,0)],
 'thinking':[(1,0),(20,1),(55,1),(80,0)],
 'reply':[(1,0),(16,1),(34,-.4),(50,.7),(72,0)]}
for name,keys in clips.items():
 action=bpy.data.actions.new(name);rig.animation_data.action=action
 for frame,v in keys:
  for pb in rig.pose.bones:pb.rotation_mode='XYZ';pb.rotation_euler=(0,0,0);pb.location=(0,0,0);pb.scale=(1,1,1)
  rig.pose.bones['Torso'].rotation_euler[1]=.015*v
  rig.pose.bones['Head'].rotation_euler[1]=(.04 if name=='idle' else .09)*v
  rig.pose.bones['Flame'].rotation_euler[1]=.055*v
  if name=='greeting':
   rig.pose.bones['Arm_R'].rotation_euler[2]=-.95*v;rig.pose.bones['Forearm_R'].rotation_euler[2]=-.34*v;rig.pose.bones['Hand_R'].rotation_euler[0]=.25*v;rig.pose.bones['Arm_L'].rotation_euler[2]=.06*v
  elif name=='listening':rig.pose.bones['Head'].rotation_euler[0]=.08*v
  elif name=='thinking':rig.pose.bones['Head'].rotation_euler[0]=-.08*v;rig.pose.bones['Arm_L'].rotation_euler[1]=.28*v;rig.pose.bones['Forearm_L'].rotation_euler[0]=-.20*v
  elif name=='reply':rig.pose.bones['Arm_L'].rotation_euler[1]=.24*v;rig.pose.bones['Arm_R'].rotation_euler[1]=-.24*v;rig.pose.bones['Forearm_L'].rotation_euler[0]=-.12*v;rig.pose.bones['Forearm_R'].rotation_euler[0]=-.12*v
  rig.pose.bones['Leg_L'].rotation_euler[0]=.02*v;rig.pose.bones['Leg_R'].rotation_euler[0]=-.02*v
  rig.pose.bones['Foot_L'].rotation_euler[0]=-.02*v;rig.pose.bones['Foot_R'].rotation_euler[0]=.02*v
  for pb in rig.pose.bones:
   pb.keyframe_insert('rotation_euler',frame=frame);pb.keyframe_insert('location',frame=frame);pb.keyframe_insert('scale',frame=frame)
 track=rig.animation_data.nla_tracks.new();track.name=name;strip=track.strips.new(name,1,action);strip.name=name;track.mute=True
rig.animation_data.action=None
for track in rig.animation_data.nla_tracks:track.mute=False
scene.frame_set(1)
def light(name,loc,energy,color,size=3):
 data=bpy.data.lights.new(name,'AREA');data.energy=energy;data.shape='DISK';data.size=size;data.color=color;o=bpy.data.objects.new(name,data);bpy.context.collection.objects.link(o);o.location=loc;o.rotation_euler=(Vector((0,0,1.8))-o.location).to_track_quat('-Z','Y').to_euler()
light('Soft key',(-3,-4,6),550,(1,.91,.78));light('Cool fill',(3,-3,3),280,(.83,.91,1));light('Warm edge',(1,2,5),700,(1,.65,.30))
camera=bpy.data.cameras.new('DeliveryCamera');o=bpy.data.objects.new('DeliveryCamera',camera);bpy.context.collection.objects.link(o);o.location=(0,-7,2.35);o.rotation_euler=(Vector((0,0,1.80))-o.location).to_track_quat('-Z','Y').to_euler();camera.type='ORTHO';camera.ortho_scale=4.15;scene.camera=o
scene.render.image_settings.file_format='PNG';scene.render.image_settings.color_mode='RGBA';scene.render.image_settings.media_type='IMAGE'
target=artifacts.file(name='fire-character-rest.png',media_type='image/png');scene.render.filepath=str(target.path);bpy.ops.render.render(write_still=True);target.publish()
result={'meshes':len(parts),'bones':len(defs),'clips':list(clips),'note':'Weighted 3D geometry; five animation clips; transparent delivery render.'}
