from ctypes import*
def t(e,*b):e.restype=c_void_p;e.argtypes=[c_void_p]*len(b);return e(*b)
t(CDLL("libclutter-1.0.so.0").clutter_init,0);e=t(CDLL("libclutter-1.0.so.0").clutter_stage_new);b=t(CDLL("libclutter-1.0.so.0").clutter_shader_effect_new,1);t(CDLL("libclutter-1.0.so.0").clutter_shader_effect_set_shader_source,b,b"___MY_SHADER___");t(CDLL("libclutter-1.0.so.0").clutter_actor_add_effect,e,b);t(CDLL("libclutter-1.0.so.0").clutter_actor_show,e);t(CDLL("libgobject-2.0.so.0").g_signal_connect_data,e,b"delete-event",CDLL("libclutter-1.0.so.0").clutter_main_quit,0,0,0);t(CDLL("libc.so.6").signal,2,CDLL("libclutter-1.0.so.0").clutter_main_quit);t(CDLL("libclutter-1.0.so.0").clutter_main)
