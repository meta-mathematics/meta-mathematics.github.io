# Fourier Orthogonality and Bessel’s Inequality

## An End-to-End Metacognitive Mathematics Walkthrough

**Problem ID:** HA-01  
**Level:** Introductory    
**Version:** 1  
**Status:** Completed exposition relative to the declared imports.  
**Evidence:** Authored mathematical proof and illustrative interaction/repair traces. No deployed multi-agent run, independent review, or proof-assistant certificate is claimed.

## 1. Target, definitions, and import contract

On $\mathbb T=\mathbb R/(2\pi\mathbb Z)$ with measure $dx/(2\pi)$, prove $e^{inx}$ form an orthonormal system. For $f\in L^2(\mathbb T)$ and $c_n=\int f(x)e^{-inx}\,dx/(2\pi)$, prove $\sum_{n\in\mathbb Z}|c_n|^2\le\|f\|_2^2$.

**Foundations and permitted imports:**

Use normalized measure dx/(2π) on T. The complex inner product is ⟨f,g⟩=∫f conj(g), linear in the first argument. L² functions on this probability space are L¹ by Cauchy–Schwarz, so coefficients are defined. Only finite orthogonal projection and monotone limits of nonnegative sums are needed.

The imports are supporting mathematical results, not outputs of an executed agent system. The proof below establishes the target relative to them. Its decisive bridges are made explicit in the node roles and activities.

## 2. Node interaction workflow

Each node owns a mathematical obligation and contains **Ego, Memory, Intellect, Sense, and Action**. These are faculties within a node. Accepted logical dependencies form a DAG; diagnostic feedback belongs to the separate repair trace in §6.

```text
N1 [v1] Orthogonality
N2 [v1] Finite projection identity
  N1 -- E1: ⟨e_n,e_m⟩=δ_nm. --> N2
N3 [v1] Infinite Bessel bound
  N2 -- E2: Exact finite projection identity and finite Bessel bound. --> N3
```

### Evidence transfer ledger

Every arrow refers to a named versioned export. Its recipient uses that export under the producer's assumptions; no arrow itself proves the claim. Nodes without incoming proof edges use only their declared foundational imports. The ledger documents the authored dependency design, not a logged runtime execution.

| Transfer | Producer / export | Exact transferred claim | Receiving activity | Compatibility gate | Evidence |
|---|---|---|---|---|---|
| T1-2 | N1/v1, E1 | ⟨e_n,e_m⟩=δ_nm. | N2.1 | N2 inputs below; same theorem objects and assumptions | Proof §4.N1 |
| T2-3 | N2/v1, E2 | Exact finite projection identity and finite Bessel bound. | N3.1 | N3 inputs below; same theorem objects and assumptions | Proof §4.N2 |

## 3. Node roles and faculty activities

### N1/v1 — Orthogonality

**Object, role, and local target:** Integrate frequency differences. The required export is: ⟨e_n,e_m⟩=δ_nm.

**Inputs:** e_n(x)=e^{inx}; normalized measure; foundational imports stated in §1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `HA-01.N1`; publish E1 only after the stated local target is established. |
| Memory | Retain e_n(x)=e^{inx}; normalized measure; foundational imports stated in §1; keep their assumptions and versions attached. |
| Intellect | Integrate frequency differences. |
| Sense | A different measure would change the norms and coefficients. |
| Action | Execute the numbered mathematical activities in §4.N1, including its displayed identities and logical implications. |

**Export E1/v1:** ⟨e_n,e_m⟩=δ_nm. Evidence is the authored argument in §4.N1, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N1 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E1, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E1. A changed hypothesis must be disclosed as a changed contract.

### N2/v1 — Finite projection identity

**Object, role, and local target:** Use an orthogonal residual. The required export is: Exact finite projection identity and finite Bessel bound.

**Inputs:** Finite set F⊂Z; c_n=⟨f,e_n⟩; prior exports E1/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `HA-01.N2`; publish E2 only after the stated local target is established. |
| Memory | Retain Finite set F⊂Z; c_n=⟨f,e_n⟩; prior exports E1/v1; keep their assumptions and versions attached. |
| Intellect | Use an orthogonal residual. |
| Sense | Orthonormality alone does not yet imply completeness. |
| Action | Execute the numbered mathematical activities in §4.N2, including its displayed identities and logical implications. |

**Export E2/v1:** Exact finite projection identity and finite Bessel bound. Evidence is the authored argument in §4.N2, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N2 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E2, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E2. A changed hypothesis must be disclosed as a changed contract.

### N3/v1 — Infinite Bessel bound

**Object, role, and local target:** Pass to a monotone nonnegative series. The required export is: Bessel’s inequality under the fixed normalization.

**Inputs:** Bounds for F={−N,…,N}; prior exports E2/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `HA-01.N3`; publish E3 only after the stated local target is established. |
| Memory | Retain Bounds for F={−N,…,N}; prior exports E2/v1; keep their assumptions and versions attached. |
| Intellect | Pass to a monotone nonnegative series. |
| Sense | Do not replace the inequality by equality before proving density. |
| Action | Execute the numbered mathematical activities in §4.N3, including its displayed identities and logical implications. |

**Export E3/v1:** Bessel’s inequality under the fixed normalization. Evidence is the authored argument in §4.N3, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N3 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E3, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E3. A changed hypothesis must be disclosed as a changed contract.

## 4. Continuous mathematical proof

Read these steps in order as one proof; the diagram is optional. Numbered activities identify the specific constructions and deductions owned by each node.

### §4.N1 — Orthogonality

1. For m=n, ⟨e_n,e_m⟩=∫1 dx/(2π)=1.

2. For m≠n, integrating e^{i(n−m)x} over[−π,π] gives zero since its endpoint values agree.

3. Thus the exponentials are orthonormal.

### §4.N2 — Finite projection identity

1. Let P_F f=∑_{n∈F}c_ne_n.

2. Orthogonality gives ⟨f−P_F f,e_m⟩=0 for m∈F and ‖P_F f‖²=∑_{n∈F}|c_n|².

3. Expand the norm of f=P_F f+(f−P_F f); the cross term vanishes, so ‖f‖²=∑_{n∈F}|c_n|²+‖f−P_F f‖².

4. Therefore every finite coefficient sum is at most‖f‖².

### §4.N3 — Infinite Bessel bound

1. The sums ∑_{|n|≤N}|c_n|² increase and are bounded above by‖f‖².

2. Their limit is the nonnegative bilateral series, proving ∑_Z|c_n|²≤‖f‖².

3. No convergence of Fourier partial sums to f has been assumed; equality requires the density bridge in HA-03.

## 5. Worked instance and boundary audit

For f=2+3cosx, c₀=2 and c_{±1}=3/2, with all other coefficients0. Thus the sum is 4+2·9/4=17/2. Direct integration of|f|² under normalized measure gives 17/2, illustrating the finite orthogonal decomposition.

**Boundary or failed-argument audit:**

In a general Hilbert space, an orthonormal system need not span the space: a single vector in R² misses its perpendicular direction. Sense blocks a candidate equality export from the Bessel proof; Fourier completeness must be supplied separately.

## 6. Illustrative interaction and repair trace

This is an authored teaching trace, not a recorded agent run.

1. **Ego → Memory:** register the §1 theorem, imports, and requested exports before beginning the proof.
2. **Intellect → Action:** choose the bridges in §3 and carry out the numbered activities in §4; transmit only established E-exports along the §2 DAG.
3. **Sense → responsible node:** test the specific boundary/failure in §5 and the node's individual audit. A failing candidate is withheld; downstream nodes may not use it.
4. **Memory + Intellect:** identify whether the error is an omitted condition, an invalid inference, or an attempted extension beyond the theorem. Restore the exact contract or explicitly state a different one.
5. **Action:** redo the affected mathematical activity using the repaired condition or inference. Recheck consuming nodes, rather than feeding their conclusions back as premises.
6. **Ego:** publish only the supported export with its assumptions and proof location. A hypothetical revised export is v2; the written proof here is the v1 exposition, not a claim that this repair was executed.

## 7. Reusable result and evidence limits

**Final reusable export:** the theorem in §1, proved by §4 under the stated imports. Keep the assumptions, import provenance, problem ID `HA-01`, version 1, and the proof with every reuse. Intermediate exports E1–E3 retain their local contracts.

The worked instance supports comprehension; it does not establish the universal claim. This walkthrough supplies an exposition and a proposed agent decomposition. It makes no empirical claim of better proof success under a fixed resource budget. Structural consistency is separate from mathematical verification.

## 8. Sources and navigation

[Local problem bank](problems.md) records the original selection and planned proof mechanism. The argument and node decomposition here are newly authored; supporting mathematical sources are listed below.

The elementary argument is developed here from the explicitly declared foundations and local imports.

[Branch index](../README.md)
