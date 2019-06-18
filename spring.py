from ctypes import*
def e(t,*c):t.restype=c_void_p;t.argtypes=[c_void_p]*len(c);return t(*c)
d=CDLL("libclutter-1.0.so.0");e(d.clutter_init,0);t=e(d.clutter_stage_new);c=e(d.clutter_shader_effect_new,1);e(d.clutter_shader_effect_set_shader_source,c,b"___MY_SHADER___");e(d.clutter_actor_show,t);e(d.clutter_actor_add_effect,t,c);e(d.g_signal_connect_data,t,b"delete-event",d.clutter_main_quit,0,0,0);e(d.signal,2,d.clutter_main_quit);e(d.clutter_main)
