from ctypes import*
def e(t,*c):t.restype=c_void_p;t.argtypes=[c_void_p]*len(c);return t(*c)
r=CDLL("libclutter-1.0.so");e(r.clutter_init,0);t=e(r.clutter_stage_new);c=e(r.clutter_shader_effect_new,1);e(r.clutter_shader_effect_set_shader_source,c,b"___MY_SHADER___");e(r.clutter_actor_show,t);e(r.clutter_actor_add_effect,t,c);e(r.g_signal_connect_data,t,b"delete-event",r.clutter_main_quit,0,0,0);e(r.signal,2,r.clutter_main_quit);e(r.clutter_main)
